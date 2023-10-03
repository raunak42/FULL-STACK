import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./landing";
import Appbar from "./appbar";
import Signup_Login from "./components/signup_login/signup_login";
import Courses from "./components/courses/courses";
import CreateOrEditCourse from "./components/CreateEditCourse/CreateEdit";
import EditPage from "./components/CreateEditCourse/EditPage"; 
import Course from "./components/CreateEditCourse/EditPage";


function App() {
  return (
    <div >
      <Router >
        <Appbar></Appbar>
        <Routes>
          <Route path={"/"} element={<Landing />}></Route>
          <Route path={"/admin/signup"} element={<Signup_Login action={"signup"} role={"admin"} />}></Route>
          <Route path={"/admin/login"} element={<Signup_Login action={"login"} role={"admin"} />}></Route>
          <Route path={"/user/signup"} element={<Signup_Login action={"signup"} role={"user"} />}></Route>
          <Route path={"/user/login"} element={<Signup_Login action={"login"} role={"user"} />}></Route>
          <Route path={"/admin/courses"} element={<Courses role="admin" />}></Route>
          <Route path={"/user/courses"} element={<Courses role="user" />}></Route>
          <Route path={"/admin/create"} element={<CreateOrEditCourse action="create" />}></Route>
          <Route path={"/admin/edit/:courseId"} element={<Course />}></Route>
          <Route></Route>
        </Routes>
      </Router>
    </div>

  )
}
export default App;