import axios from "axios";

export const baseUrl = axios.create({baseURL:'http://localhost:8000'});


export class Response{
    status=false;
    response = {};
    errorMessage = "";
    constructor({status = false, response = {}, errorMessage= ''}){
        this.errorMessage = errorMessage;
        this.status = status;
        this.response = response;
    }
}