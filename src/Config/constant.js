import axios from "axios";

export const url = 'http://localhost:8000';
export const baseUrl = axios.create({baseURL:url});

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