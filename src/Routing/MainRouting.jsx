import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import ForgetPassword from "../Pages/ForgetPassword/ForgetPasswordPage";
import Home from "../Pages/Home/HomePage";
import Login from "../Pages/Login/LoginPage";
import SignUp from "../Pages/SignUp/SignUpPage";

const MainRouting = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/sign-up" element={<SignUp />} />
                <Route exact path="/*" element={<Home/>} />
                <Route exact path="/forget" element={<ForgetPassword/>} />
                
            </Routes>
        </Router>
    )
}
export default MainRouting;