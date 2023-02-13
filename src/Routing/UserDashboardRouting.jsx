import { Route, Routes } from "react-router-dom"
import AllBlogs from "../Pages/UserDashboard/AllBlogs/AllBlogs"
import UserDashBoardHome from "../Pages/UserDashboard/Home/Home"

const UserDashboardRouting = () => {
    return (
        <>
            <Routes>
                <Route exact path={'/'} element={<UserDashBoardHome />} />
                <Route exact path={'/blogs'} element={<AllBlogs/>} />
            </Routes>
        </>
    )
}
export default UserDashboardRouting