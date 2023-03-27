import { baseUrl, Response } from "../../Config/constant";
import Store from '../../Store';
import { addBlogs } from "../../Store/Slices/blogSlice";
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


export const editBlogFun = async ({blogId, toUpdate })=>{
    try{
        
    
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

export const deleteBlogFun = async ({blogId})=>{
    try{
        
    
         const res =  await baseUrl.delete(`/blogs/delete/${blogId}`);
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

export const addCommentFun = async ({blogId, commentData})=>{
    try{
        
    
         const res =  await baseUrl.post(`/blogs/comments/${blogId}`, commentData);
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