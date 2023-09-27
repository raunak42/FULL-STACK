import { useState } from 'react'
import React, { useEffect } from "react";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



let ctr=0;

function App() { //component~>function
ctr++;
  const [sex, setSex] = useState({   //sex is a state variable
    title: "go to gym ",
    description: "from 5-7 ",

  });
    console.log("render "+ctr)
    React.useEffect(()=>{
       const intervalId= setInterval(() => {
            setSex({
              title: "go to class ",
              description: "from 7-9 " +Math.random(),

            })
          }, 1000);
          return () => {
            clearInterval(intervalId); // Clear the interval when the component is unmounted
          };
    },[])


  return (


    <div>
      <h5>hi there, hello</h5>
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