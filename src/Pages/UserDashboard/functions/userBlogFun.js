import { baseUrl } from "../../../Config/constant";
import Store from "../../../Store";
import { addUserBlogs } from "../../../Store/Slices/dashboardSlice";
const {dispatch} = Store;
export const getUserBlogsFun = async ({ userId})=>{
    try{
         const res =  await baseUrl.get(`/blogs/all?id=${userId}`);
         
         console.log(res.data);
         if(res.data.status){
            dispatch(addUserBlogs(res.data.data))
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