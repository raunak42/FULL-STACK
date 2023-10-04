import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUpAdmin from "./Admin_side/Signup";

function App() {
  return (
    <Router>
      {/* <Appbar /> */}
      <Routes>
        {/* <Route path={"/"} element={<Landing />}></Route> */}
        <Route path={"/signup"} element={<SignUpAdmin />}></Route>
        {/* <Route path={"/admin/login"} element={<SignupLogin />}></Route>

        <Route path={"user/signup"} element={<SignupLogin />}></Route>
        <Route path={"user/login"} element={<SignupLogin />}></Route> */}
      </Routes>
      <Routes>

      </Routes>
    </Router>
  )
}

export default App;