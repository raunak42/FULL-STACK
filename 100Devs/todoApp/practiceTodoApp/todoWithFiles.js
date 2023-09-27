const fs= require('fs');

const express = require('express');
const app=express(); 

const bodyParser=require('body-parser');
app.use(bodyParser.json());

const PORT=3000;
function listening(){
    console.log(`Listening on port ${PORT}`)
}
app.listen(PORT, listening);
/////////////////////////////////////////////
app.get('/todos', (req, res)=>{
    fs.readFile('todos.json', 'utf-8', (err, data)=>{
        if(err)throw err;
        const todos=JSON.parse(data);
        res.json(todos)
    })
});

app.get('/todos/:id', (req, res)=>{
    fs.readFile('todos.json', 'utf-8', (err, data)=>{
        if(err)throw err;
        const todos=JSON.parse(data)
        let obj=todos.find(ele=>ele.id===parseInt(req.params.id))
        if(obj===undefined){
            res.status(404).send("Couldn't find the todo item by id.")
        }
        else{
            res.json(obj);
        }

    })
    
}
);

app.post('/todos', (req, res)=>{
    let element={
        id: Math.floor(Math.random()*1000000) ,
        title: req.body.title,
        completed: req.body.completed,
        description: req.body.description
    }

    fs.readFile('todos.json', 'utf-8', (err, data)=>{
        if(err) throw err;
        const todos=JSON.parse(data);
        todos.push(element);
        fs.writeFile('todos.json', JSON.stringify(todos), (err)=>{
            if(err) throw err;
            res.status(201).json(element)
        });

    });
})

app.put('/todos/:id', (req, res)=>{
    fs.readFile('todos.json', 'utf-8', (err, data)=>{
        const todos= JSON.parse(data);
        let elementObj=todos.find(ele=>ele.id===parseInt(req.params.id))
        if(elementObj==undefined){
            res.status(404).send("The todo item doesn't exist.")
        } 
        else{
            elementObj.title=req.body.title;
            elementObj.completed=req.body.completed;
            elementObj.description=req.body.description;
            
            fs.writeFile('todos.json', JSON.stringify(todos), (err)=>{
                if(err) throw err;
                res.json(elementObj);

            })
        }
    })
    
})

app.delete('/todos/:id', (req, res)=>{
    fs.readFile('todos.json', 'utf-8', (err, data)=>{
        if (err) throw err;
        const todos=JSON.parse(data);

        const index=todos.findIndex(ele=>ele.id===parseInt(req.params.id))
    if(index==-1){
        res.status(404).send("The todo item doesn't exist.")
    }
    else{
        todos.splice(index, 1);
    }
    fs.writeFile('todos.json', JSON.stringify(todos), (err)=>{
        if (err) throw err;
        res.status(200).json(todos)
    })

    })
    
})

app.use((req, res, next)=>{
    res.status(404).send("Invalid route.")
}) 