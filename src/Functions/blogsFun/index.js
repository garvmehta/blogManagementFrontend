import { baseUrl, Response } from "../../Config/constant";
import Store from '../../Store';
import { addBlogs, addComment, likeBlog } from "../../Store/Slices/blogSlice";
import { editSingleBlog, removeUserBlog } from "../../Store/Slices/dashboardSlice";
const {dispatch}  = Store;
export const getAllBlogFun = async ({status, userId})=>{
    try{
         const res =  await baseUrl.get(`/blogs/getByStatus/?status=${status}&userId=${userId}`);
         
         console.log(res.data);
         if(res.data.status){
            dispatch(addBlogs(res.data.data))
             return {
                status: true,
             }

         }else{
            return {
                status: false,
                errorMessage:res.data.message,
             }
         }
    }catch(catchError){
        return {
            status:false,
            errorMessage: catchError
        }
    }
    
}


export const editBlogFun = async ({blogId, toUpdate, index })=>{
    
    try{
        console.log(blogId, index, toUpdate );
        dispatch(editSingleBlog({index, toUpdate}))
         const res =  await baseUrl.put(`/blogs/update/${blogId}`,toUpdate); 
         console.log(res.data);
         if(res.data.status){
             return {
                status: true,
                response:res.data.data,
             }

         }else{
            return {
                status: false,
                errorMessage:res.data.message,
             }
         }
    }catch(catchError){
        return {
            status:false,
            errorMessage: catchError
        }
    }
    
}

export const deleteBlogFun = async ({index, id})=>{
    try{
        dispatch(removeUserBlog(index));
         const res =  await baseUrl.delete(`/blogs/delete/${id}`);
         console.log(res.data);
         if(res.data.status){
             return {
                status: true,
                response:res.data.data,
             }

         }else{
            return {
                status: false,
                errorMessage:res.data.message,
             }
         }
    }catch(catchError){
        return {
            status:false,
            errorMessage: catchError
        }
    }
    
}

export const addCommentFun = async ({userId, commentData, index})=>{
    try{
        console.log(commentData);
        dispatch(addComment({commentDetails:commentData,index}));
         const res =  await baseUrl.post(`/blogs/comments/${userId}`, commentData);
         console.log(res.data);
         if(res.data.status){
             return {
                status: true,
                response:res.data.data,
             }

         }else{
            return {
                status: false,
                errorMessage:res.data.message,
             }
         }
    }catch(catchError){
        return {
            status:false,
            errorMessage: catchError
        }
    }
    
}

export const likeBlogFun = async({userId, name, blogId, status, index })=>{
    try{
        const body = {
            name,
            blog_id:blogId,
            status
        }
        dispatch(likeBlog({index, isLiked: status}));
        const res = await baseUrl.post(`/blogs/like/${userId}`, body);
        if(res.data.status){
            return true;
        }
        else{
            return false;
        }
    }
    catch(error){
        return false
    }
}