import { useEffect } from "react"
import { useSelector } from "react-redux"
import { Route, Routes } from "react-router-dom"
import AllUsers from "../Pages/UserDashboard/All Users/Screen"
import AllBlogs from "../Pages/UserDashboard/AllBlogs/AllBlogs"
import CreateBlog from "../Pages/UserDashboard/Create Blog/Screen"
import { getUserBlogsFun } from "../Pages/UserDashboard/functions/userBlogFun"
import UserDashBoardHome from "../Pages/UserDashboard/Home/Home"
import SingleBlog from "../Pages/UserDashboard/SingleBlog.jsx/Screen"



const UserDashboardRouting = () => {
    const userType = 'user';
    const UserState = useSelector((state)=> state.user);
    const getAllData = async()=>{
        const res = await getUserBlogsFun({userId:UserState._id})
        console.log(res, 'res of user Blogs')
    }
    useEffect(()=>{
        getAllData()
    },[])
    return (
        <>
            {(UserState.type === 'user') ?
                <Routes>

                    <Route exact path={'/'} element={<UserDashBoardHome />} />
                    <Route exact path={'/blogs'} element={<AllBlogs />} />
                    <Route exact path={'/singleBlog'} element={<SingleBlog />} />
                    <Route exact path="/create" element={<CreateBlog />} />

                </Routes>
                :
                <Routes>
                    <Route exact path={'/'} element={<UserDashBoardHome />} />
                    <Route exact path={'/blogs'} element={<AllBlogs />} />
                    <Route exact path={'/singleBlog'} element={<SingleBlog />} />
                    <Route exact path="/create"  element={<CreateBlog />} />
                    <Route exact path="/allUsers" element={<AllUsers />} />
                </Routes>
            }

        </>
    )
}
export default UserDashboardRouting