const express = require("express");
const app = express();
app.use(express.json());

const jwt = require("jsonwebtoken");
const SECRET = "secret24";

const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://RaunakA_:QTbajjyxdQEZMJDf@cluster0.ivcfy9f.mongodb.net", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "ToDo_App"
});

const port = 3000;
app.listen(port, (req, res) => {
    console.log("App listening on port " + `${port}`) 
});

const cors = require("cors");
app.use(cors());

const todoSchema = new mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    todos: [todoSchema],
});

const User = mongoose.model("User", userSchema);

const authenticateJwt = (req, res, next) => {
    const authHeader = req.headers.authentication;
    if (authHeader) {
        const token = authHeader.split(" ")[1];
        jwt.verify(token, SECRET, (err, decoded) => {
            if (err) {
                res.sendStatus(403);
            }
            else {
                req.decrypted = decoded;
                next();
            }
        })
    } else {
        res.status(400).json({ message: "recheck the token you input" });
    }
};

const loggedInMiddleware = async (req, res, next) => {
    try {
        const existingUser = await User.findOne({
            username: req.decrypted.username,
            password: req.decrypted.password
        });
        if (existingUser) {
            req.loggedIn = true;
            req.existingUser = existingUser;
            next();
        } else {
            req.loggedIn = false;
            next();
        }
    } catch (error) {
        res.json({ error: error.message });
    }
};

const userDetailsFromBody = (req, res, next) => {
    const username = req.body.username;
    const password = req.body.password;
    req.details = {
        username: username,
        password: password
    }
    next();
};

/////Routing/////
app.post("/todos/signup", async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username: username, password: password });
    if (!user) {
        let newUserObj = {
            username: username,
            password: password
        }
        let newUser = new User(newUserObj);
        await newUser.save();
        res.json({ message: "user created succesfully" })
    } else {
        res.status(409).json({ error: "username taken" })
    }

});

app.post("/todos/login", async (req, res) => {
    let existingUser = await User.findOne({
        username
     });
    if (existingUser) {
        const token = jwt.sign({ ...req.details }, SECRET, { expiresIn: "10h" });
        res.json({
            message: "succesfully logged in",
            token: token
        })
    } else {
        res.status(401).json({ message: "incorrect username or password" })
    }
});

app.get("/todos", authenticateJwt, loggedInMiddleware, async (req, res) => {
    if (req.loggedIn === true) {
        res.json({
            Your_Todos: req.existingUser.todos
        })
    } else {
        res.status(401).json({ message: "incorrect username or password" });
    }

});

app.post("/todos", authenticateJwt, loggedInMiddleware, async (req, res) => {
    if (req.loggedIn === true) {
        let newTodoObj = req.body;
        let todos = req.existingUser.todos;
        todos.push(newTodoObj);
        await req.existingUser.save();
        res.json({
            message: "todo saved",
            todo: todos[todos.length - 1]
        });
    } else {
        res.status(400).json({ message: "user doesn't exist" })
    }
});

app.put("/todos/:todoId", authenticateJwt, loggedInMiddleware, async (req, res) => {
    try {
        if (req.loggedIn === true) {
            const todoId = req.params.todoId;
            const todoIndex = req.existingUser.todos.findIndex(t => t._id == todoId);
            if (todoIndex === -1) {
                res.json({ message: "todo not found" });
            } else {
                let todo = req.existingUser.todos[todoIndex]
                todo.title = req.body.title;
                todo.description = req.body.description;
                todo.completed = req.body.completed;
                await req.existingUser.save();

                res.json({
                    message: "Todo updated succesfully",
                    updatedTodo: todo,
                    Your_Todos: req.existingUser.todos
                })
            }
        } else {
            res.json({ message: "User not found." })
        }
    } catch (error) {
        res.json({ error: error.message })
    }
});

app.delete("/todos/:todoId", authenticateJwt, loggedInMiddleware, async (req, res) => {
    if (req.loggedIn === true) {
        const todoId = req.params.todoId;
        const todoIndex = req.existingUser.todos.findIndex(t => t._id == todoId);
        if (todoIndex === -1) {
            res.json({ message: "todo not found" })
        } else {
            req.existingUser.todos.splice(todoIndex, 1);
            await req.existingUser.save();
            res.json({
                message: "Todo deleted succesfully",
                Your_Todos: req.existingUser.todos
            })
        }
    } else {
        res.status(401).json({ message: "User not found" });
    }
});

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirnamem, "<frontend html file name>"));
});
