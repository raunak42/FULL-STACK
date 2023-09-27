// import React, { useEffect } from "react";
// import { useState } from 'react'
// import './App.css'

// function App() {
//   const [todos , setTodos] = React.useState([{
//     title: "Go to gym",
//     description: "Hit gym from 5-7",
//     id: 1
//   },
//   {
//     title: "Go to class",
//     description: "Hit gym from 7-9",
//     id: 2
//   }]);

//   return ( 
//     <div>
//       {todos.map((todo)=>{
//         return <div>
//             {todo.title}
//             {todo.description}
//             <br/>
//         </div>
//       })}
//     </div>
//   )
// }


// export default App;
//////////////////////////////////////////
import { useState } from 'react'
import React, { useEffect } from "react";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'





function App() { //component~>function

  const [sex, setSex] = useState({   //sex is a state variable
    title: "go to gym ",
    description: "from 5-7 ",
    
  });
    console.log("render")
    React.useEffect(()=>{
        setInterval(() => {
            setSex({
              title: "go to class ",
              description: "from 7-9 " +Math.random(),
              
            })
          }, 1000)
    },[])
   

  return (


    <div>
      <h5>hi there</h5>
      {sex.title}
      {sex.description}<br/>
      <PersonName firstName={"Raunak"} lastName={"Lanjewar"}></PersonName>
    </div>

  )
}

function PersonName(props) {
  return <div>
    {props.firstName} {props.lastName}
  </div>
}

export default App