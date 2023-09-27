import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup_Login from "./signup_login";
import Landing from "./landing";
import Appbar from "./appbar";
import CreateEditCourse from "./createEditCourse";


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
          <Route path={"/create"} element={<CreateEditCourse />}></Route>
          <Route></Route>
        </Routes>
      </Router>
    </div>

  )
}
export default App;