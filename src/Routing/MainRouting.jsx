import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import ForgetPassword from "../Pages/ForgetPassword/ForgetPasswordPage";
import Home from "../Pages/Home/HomePage";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp/SignUpPage";
import UserDashBoard from "../Pages/UserDashboard/UserDashboard";

const MainRouting = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/*" element={<Home/>} />
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/sign-up" element={<SignUp />} />
                <Route exact path="/forget" element={<ForgetPassword/>} />
                <Route exact path="/dashboard/*" element={<UserDashBoard/>}/>
                
            </Routes>
        </Router>
    )
}
export default MainRouting;