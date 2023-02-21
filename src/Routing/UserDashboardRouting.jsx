import { Route, Routes } from "react-router-dom"
import AllBlogs from "../Pages/UserDashboard/AllBlogs/AllBlogs"
import CreateBlog from "../Pages/UserDashboard/Create Blog/Screen"
import UserDashBoardHome from "../Pages/UserDashboard/Home/Home"
import SingleBlog from "../Pages/UserDashboard/SingleBlog.jsx/Screen"

const UserDashboardRouting = () => {
    return (
        <>
            <Routes>
                <Route exact path={'/'} element={<UserDashBoardHome />} />
                <Route exact path={'/blogs'} element={<AllBlogs/>} />
                <Route exact path={'/singleBlog'} element={<SingleBlog/>} />
                <Route exact path="/create" element={<CreateBlog/>} />
            </Routes>
        </>
    )
}
export default UserDashboardRouting