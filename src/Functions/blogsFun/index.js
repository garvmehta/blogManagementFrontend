import { baseUrl, Response } from "../../Config/constant";

export const getAllBlogFun = async ()=>{
    try{
        
    
         const res =  await baseUrl.get('/blogs/all');
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