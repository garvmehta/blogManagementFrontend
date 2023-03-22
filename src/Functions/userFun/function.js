import { baseUrl, Response } from "../../Config/constant"


export const loginFun = async ({email, password})=>{
    try{
        const body = {
            email,
            password
        };
    
         const res =  await baseUrl.post('/users/login', body);
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

export const signupFun = async ({name, email,password, type})=>{
    try{    
        const body = {
            name,
            email,
            password,
            type
        }
        const res = await baseUrl.post('/users/signup', body);
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