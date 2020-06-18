import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestapiService {

    CurrentUser:String;
    constructor(private http:HttpClient) { }

login(username:string,password:string){
    this.CurrentUser=username;
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.http.get("http://localhost:8080/auth",{headers})
}
 
logout(){
    sessionStorage.removeItem("username");
}
}
