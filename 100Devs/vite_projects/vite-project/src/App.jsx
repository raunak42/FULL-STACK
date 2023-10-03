import React, { useEffect } from "react";
import axios from "axios";
/// hook
//custom hook
let counter = 0;
function UseTodos() {
  const [todos, setTodos] = React.useState([]);
  counter++
  console.log("render " + counter)
  React.useEffect(() => {
    fetch("http://localhost:3000/todos", {
      method: "GET"
    }).then((response) => {
      response.json().then((data) => {
        console.log(data)
        setTodos(data)
      })
    });

    const Interval = setInterval(() => {
      fetch("http://localhost:3000/todos", {
        method: "GET"
      }).then((response) => {
        response.json().then((data) => {
          console.log(data)
          setTodos(data)
        })
      });
    }, 1000);
    return () => {
      clearInterval(Interval);
    }
  }, []);




  return todos ;
}

function App() {
  const todos = UseTodos();
 
  return (

    <div>
      <PersonName firstName={"Raunak"} lastName={Math.random()}></PersonName>
      <Hello></Hello>
      <Gondor boromir={"Mighty"} denethor={"shit"} ></Gondor>
      <br />Todo title<br />
      <input type="text" id="title"></input>
      <br /><br />
      Has it been completed?<br />
      <input type="text" id="completed"></input>
      <br /><br />
      Describe todo<br />
      <input type="text" id="description"></input>
      <br /><br />

      <button>Save Todo</button>
      <br /><br />


      id (to edit/delete/display a todo by id)<br />
      <input type="text" id="id"></input>
      <br /><br />
      <button>Edit todo(input id)</button>
      <button>Delete todo(input id)</button>
      <button>Get todo(input id)</button>
      <br /><br /><br /><br />
      {todos.map(todo => {
        return <div>

          {todo.title}<br />
          {todo.description}<br />
          {todo.completed}<br />
          <button>DELETE</button>
          id: {todo.id}
          { }
          <br />
        </div>
      })}
    </div>
  )
}
function PersonName(props) {
  return <div>
    {props.firstName} {props.lastName}
  </div>
}

function Hello() {
  return <div>
    Meet you at the gym.
  </div>
}

function Gondor(props) {
  return (
    <div>
      {props.boromir} {props.denethor}
    </div>
  );
}

export default App;