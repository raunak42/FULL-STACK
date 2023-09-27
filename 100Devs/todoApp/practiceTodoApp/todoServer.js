const express = require('express');
const app=express();

const bodyParser=require('body-parser');
app.use(bodyParser.json());

const cors=require("cors");
app.use(cors());
 
const path=require('path');

const PORT=3000;
app.listen(PORT);
////////////////////////////////////////////
var todos=[];
app.get('/todos', (req, res)=>{
    res.json(todos)
});

app.get('/todos/:id', (req, res)=>{
    // let obj=todos.find(ele=>ele.id===parseInt(req.params.id))
    // if(obj===undefined){
    //     res.status(404).send("Couldn't find the todo item by id.")
    // }
    // else{
    //     res.json(obj);
    // }
    var foundElement=false;
    for (var i=0; i<todos.length; i++){
        if(todos[i].id===parseInt(req.params.id)){
            foundElement=true;
            res.json(todos[i])
        }
    }
    if(!foundElement){
        res.sendStatus(404);
        
    }
  //  else{res.json(todos[i]);} //won't work because 'i' is defined only inside the loop.

}
);

app.post('/todos', (req, res)=>{
    let element={
        id: Math.floor(Math.random()*1000000) ,
        title: req.body.title,
        completed: req.body.completed,
        description: req.body.description
    }
    todos.push(element); 
    res.status(201).json(element);
}) 

app.put('/todos/:id', (req, res)=>{
    let index=todos.findIndex(ele=>ele.id===parseInt(req.params.id))
    if(index==-1){
        res.status(404).send("The todo item doesn't exist.")
    }
    else{
        todos[index].title=req.body.title,
        todos[index].completed=req.body.completed,
        todos[index].description=req.body.description

        res.json(todos[index]);
    }
});

app.delete('/todos/:id', (req, res)=>{
    const index=todos.findIndex(ele=>ele.id===parseInt(req.params.id))
    if(index==-1){
        res.status(404).send("The todo item doesn't exist.")
    }
    else{
        todos.splice(index, 1);
        res.status(200).json(todos)
    }
}) 

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, "index2.html"));
  })

app.use((req, res, next)=>{
    res.status(404).send("Invalid route.")
})