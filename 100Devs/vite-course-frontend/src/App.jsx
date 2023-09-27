import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
 
import Signup from "./Signup";
import Appbar from "./Appbar";
import Signin from "./Signin";
import Addcourse from './Addcourse';
import Courses from './Courses';
import Course from './Course'
import HomePage from './HomePage'
import MyCourses from './MyCourses'; 



function App() {
  return (
 

    <div style={{ 
      minHeight: '100vh', // Set minimum height to cover the viewport
      backgroundColor: '#eeeeee',
      display: 'flex', 
      flexDirection: 'column'
    }}>

      <Router>
        <Appbar></Appbar>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/admin/login" element={<Signin bool={true} role="admin" />} />
          <Route path="/admin/register" element={<Signup />} /> 
          <Route path="/addcourse" element={<Addcourse bool={false} />} />
          <Route path="/admin/courses" element={<Courses bool={true} />} />
          <Route path="/course/:courseId" element={<Course />} />
          <Route path="/user/login" element={<Signin bool={false} role="user" />} />
          <Route path="/user/register" element={<Signup />} />
          <Route path="/user/courses" element={<Courses bool={false} />} />
          <Route path="/user/courses/:courseId" element={<Courses bool={false} />} />
          <Route path="/user/myCourses" element={<MyCourses/>} />
        </Routes>
      </Router>

    </div>




  )
};

function tokenExists(props) {
  const token = localStorage.getItem("token");
  if (token == props.token) {

  }
}
function Greet() {
  return <h1>hello world</h1>
};

function GreetPerson(person) {
  return <div>
    hello {person.name}
  </div>
}

export default App
