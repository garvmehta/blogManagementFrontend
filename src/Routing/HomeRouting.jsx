import { Route, Routes } from "react-router-dom"
import Blogs from "../Pages/Blogs/Blogs"
import SingleBlogPage from "../Pages/SingleBlog/SingleBlogPage"

const HomeRouting = () => {
    return (
        <>
            <Routes>
                <Route exact path={'/'} element={<Blogs />} />
                <Route exact path={'/blog'} element={<SingleBlogPage />} />
            </Routes>
        </>
    )
}
export default HomeRouting