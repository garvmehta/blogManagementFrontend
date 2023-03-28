import { useEffect } from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import ForgetPassword from "../Pages/ForgetPassword/";
import Home from "../Pages/Home/HomePage";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp/";
import UserDashBoard from "../Pages/UserDashboard/UserDashboard";
import { useDispatch } from "react-redux";
import { addUser } from "../Store/Slices/userSlice";
import { getAllBlogFun } from "../Functions/blogsFun";

const MainRouting = () => {
    const userDispatch = useDispatch();
    useEffect(() => {
        checkUserLogged();
    }, [])
    const checkUserLogged = () => {
        const loggedStatus = localStorage.getItem('blogAppLogged');
        if (loggedStatus === "true") {
            const user = JSON.parse(localStorage.getItem('blogAppUserData'));
            console.log('user data from local '); 
            console.log(user);
            userDispatch(addUser(user))
             getAllBlogFun({ status: 'approved', userId: user._id });
        }
        else {
            getAllBlogFun({ status: 'approved', userId: "" });
            // const user = new User({_id:""});
            // userDispatch(addUser({ _id:'', name: '', email: '', loggedStatus: false }))
        }
    }
    return (
        <Router>
            <Routes>
                <Route exact path="/*" element={<Home />} />
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/sign-up" element={<SignUp />} />
                <Route exact path="/forget" element={<ForgetPassword />} />
                <Route exact path="/dashboard/*" element={<UserDashBoard />} />

            </Routes>
        </Router>
    )
}
export default MainRouting;