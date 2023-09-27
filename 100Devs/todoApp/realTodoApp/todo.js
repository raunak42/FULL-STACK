const fs = require('fs');
const path = require('path');

const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const cors = require('cors');
app.use(cors());

const PORT = 3000;
app.listen(PORT);
console.log(`listening on port `+ `${PORT}`)
///////////////////////////////////////////
//////Signup///////////////////////////////
///////////////////////////////////////////
app.post('/signup', (req, res) => {
    fs.readFile(path.join(__dirname, '/userData.json'), (err, data) => { //make sure userData.json already contains an array, either empty or filled.
        if (err) throw err;
        else {
            let userData = JSON.parse(data);
            var userFound = false;
            for (let i = 0; i < userData.length; i++) {
                if (userData[i].username === req.body.username || userData[i].email === req.body.email) {
                    userFound = true;
                }
            }
            if (!userFound) {
                var element = {
                    username: req.body.username,
                    password: req.body.password,
                    email: req.body.email
                }
                userData.push(element);

                fs.writeFile(path.join(__dirname, '/userData.json'), JSON.stringify(userData), (err) => {
                    if (err) throw (err);
                    res.send("signup success")
                })



            }
            else { res.status(404).send("username or email already exists") }
        }
    })

})
///////////////////////////////////////////
//////Login////////////////////////////////
///////////////////////////////////////////
app.post('/login', (req, res) => { 
    fs.readFile(path.join(__dirname, 'userData.json'), (err, data) => {
        if (err) throw err;
        else {
            let userData = JSON.parse(data);
            let userFound = false;
            for (var i = 0; i < userData.length; i++) {
                if (userData[i].username === req.body.username && userData[i].password === req.body.password) {
                    userFound = true;
                    break; // Exit the loop since user is found
                }
            }
            if (!userFound) {
                res.sendStatus(404);
            }
            else {
                res.redirect('/todos') //you'll see error if /todos is not defined.
            }
            
        }
    });
});
///////////////////////////////////////////
//////DisplayTodos/////////////////////////
///////////////////////////////////////////
app.get('/todos', (req, res) => {
    fs.readFile(path.join(__dirname, '/todos.json'), (err, data) => {
        if (err) throw err;
        else {
            let todos = JSON.parse(data); 
            res.send(todos);
        }

    })
})
///////////////////////////////////////////
//////DisplayTodoByID//////////////////////
///////////////////////////////////////////
app.get('/todos/:id', (req, res)=>{ 
    fs.readFile(path.join(__dirname, '/todos.json'), (err, data)=>{
        if (err)throw(err);
        else{
            let todos=JSON.parse(data);
            let elementObject=todos.find(t=>
                t.id===parseInt(req.params.id)
            )
            if(elementObject==undefined){
                res.sendStatus(404);
            }else{
                res.json(elementObject);
            }

            
        }
    } )
})
///////////////////////////////////////////
//////PostTodo/////////////////////////////
///////////////////////////////////////////
app.post('/todos', (req, res)=>{
    fs.readFile(path.join(__dirname, 'todos.json'), (err, data)=>{
        if(err) throw err;
        else{
            let todos=JSON.parse(data);
            var newTodo={
                id: Math.floor(Math.random()*1000000),
                title: req.body.title,
                completed: req.body.completed,
                description: req.body.description
            }
            todos.push(newTodo);
            fs.writeFile(path.join(__dirname, 'todos.json'), JSON.stringify(todos), err=>{
                if(err)throw err;
                res.send(newTodo);
            })
        }
    })
})
///////////////////////////////////////////
//////UpdateTodoByID///////////////////////
///////////////////////////////////////////
app.put('/todos/:id', (req, res)=>{
    fs.readFile(path.join(__dirname, '/todos.json'), (err, data)=>{
        if(err)throw err;
        else{
            let todos=JSON.parse(data);
            let todo=todos.find(t=> t.id===parseInt(req.params.id))
            if(todo===undefined){
                res.sendStatus(404);
            }else{
                todo.title=req.body.title;
                todo.completed=req.body.completed;
                todo.description=req.body.description;
                fs.writeFile(path.join(__dirname, '/todos.json'), JSON.stringify(todos), err =>{
                    if (err)throw err;
                    res.send(todo);

                })
            }
        }
    })
})
///////////////////////////////////////////
//////DeleteTodoByID///////////////////////
///////////////////////////////////////////
app.delete('/todos/:id', (req,res)=>{
    fs.readFile(path.join(__dirname, '/todos.json'), (err, data)=>{
        if(err) throw err;
        else{
            let todos=JSON.parse(data);
            let index=todos.findIndex(t=>t.id===parseInt(req.params.id));
            if(index===-1){
                res.sendStatus(404)
            }else{
                todos.splice(index, 1)
                fs.writeFile(path.join(__dirname, "/todos.json"), JSON.stringify(todos), err=>{
                    if(err) throw err;
                    res.json(todos);
                })
            }
        }
    })
})
///////////////////////////////////////////
//////Open index.html in browser at '/'.///
///////////////////////////////////////////
app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, "index.html"));
  })
