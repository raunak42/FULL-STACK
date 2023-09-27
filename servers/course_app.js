const express = require("express");
const app = express();

const jwt = require("jsonwebtoken");
const SECRET = ("8g2f46g");

const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://RaunakA_:QTbajjyxdQEZMJDf@cluster0.ivcfy9f.mongodb.net", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "Course_Selling_App"
});

const PORT = 3000;
app.use(PORT, (req, res) => {
    console.log("App listening on port " + `${PORT}`);
});

const adminSchema = new mongoose.Schema({
    username: String,
    password: String
});

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    purchasedCourses: [{ type: mongoose.Schema.Types.ObjectId, ref: "Course" }]
});

const courseSchema = new mongoose.Schema({
    title: String,
    description: String,
    price: Number,
    imageLink: String,
    published: Boolean
});

const Admin = mongoose.model("Admin", adminSchema);
const User = mongoose.model("User", userSchema);
const Course = mongoose.model("Course", courseSchema);

authenticateJwt((req, res, next) => {
    const token = req.headers.authentication.split(" ")[1];
    if (token) {
        jwt.verify(token, SECRET, (err, decoded) => {
            if (err) throw err;
            req.decrypted = decoded;
            next();
        })
    } else {
        res.json({ message: "recheck the token you input" });
    }
});

const loggedInMiddleware = async (req, res, next) => {

    try {
        const existingAdmin = await Admin.findOne({
            username: req.decrypted.adminUsername,
            password: req.decrypted.password,
            _id: req.decrypted._id
        });
        const existingUser = await User.findOne({
            username: req.decrypted.username,
            password: req.decrypted.password,
            _id: req.decrypted._id

        });
        if (existingAdmin || existingUser) {
            req.loggedIn = true;
            req.existingAdmin = existingAdmin;
            req.existingUser = existingUser;
            next();
        } else {
            req.loggedIn = false;
            next();
        }
    }catch(error){
        res.json({error: error.message})
    }
    
};

/*Admin routes,
Continue here.....*/




