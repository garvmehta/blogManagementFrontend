
import { baseUrl, Response } from "../../Config/constant"
import Store from "../../Store";
import { addUser } from "../../Store/Slices/userSlice";
const {dispatch} = Store;
// Login User Function
export const loginFun = async ({email, password})=>{
    try{
        const body = {
            email,
            password
        };
    
         const res =  await baseUrl.post('/users/login', body);
        //  console.log(res.data);
         if(res.data.status){
            dispatch(addUser(res.data.data));
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
// Signup User Function
export const signupFun = async ({name, email,password, type})=>{
    try{    
        const body = {
            name,
            email,
            password,
            type
        }
        // console.log(body);
        const res = await baseUrl.post('/users/signup', body);
        if(res.data.status){
            const response = new Response({status:true, response:res.data.data,});
            console.log(response);
            dispatch(addUser(res.data.data));
            return response 
        }
        else{
            const response = new Response({errorMessage:res.data.message});
            console.log(response);
            return response
        }
    }catch(catchError){
        const response = new Response({errorMessage:catchError});
            console.log(response);
            return response
    }
}
// Forget password User Function
export const forgetPasswordFun = async ({email,password})=>{
    try{    
        const body = {
           
            email,
            password,
           
        }
        const res = await baseUrl.put('/users/forget', body);
        if(res.data.status){
            const response = new Response({status:true, response:res.data.data,});
            console.log(response);
            return response 
        }
        else{
            const response = new Response({errorMessage:res.data.message});
            console.log(response);
            return response
        }
    }catch(catchError){
        const response = new Response({errorMessage:catchError});
            console.log(response);
            return response
    }
}
// delete User Function
export const deleteuserFun = async ({userId})=>{
    try{    
        
        const res = await baseUrl.delete(`/users/delete/${userId}`);
        console.log(res.data);
        if(res.data.status){
            const response = new Response({status:true});
            console.log(response);
            return response 
        }
        else{
            const response = new Response({errorMessage:res.data.message});
            console.log(response);
            return response
        }
    }catch(catchError){
        const response = new Response({errorMessage:catchError});
            console.log(response);
            return response
    }
}
// get all User Function
export const getAllUserFun = async()=>{
    try{    
        
        const res = await baseUrl.get(`/users/all`);
        console.log(res.data);
        if(res.data.status){
            const response = new Response({status:true, response: res.data.data});
            console.log(response);
            return response 
        }
        else{
            const response = new Response({errorMessage:res.data.message});
            console.log(response);
            return response
        }
    }catch(catchError){
        const response = new Response({errorMessage:catchError});
            console.log(response);
            return response
    }
}