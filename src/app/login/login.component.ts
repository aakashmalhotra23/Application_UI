import { Component, OnInit } from '@angular/core';
import { RestapiService } from '../restapi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  public message: any;
  

  constructor(private service: RestapiService,private router:Router) { }

  ngOnInit() {
  
  }

  Login() {
    this.service.login(this.username, this.password).subscribe((data) => {
      this.message = data;
      console.log(this.message.response);
      if(this.message.response === "Successful"){
        sessionStorage.setItem("username",this.username);
        this.router.navigate(["/dashboard"])
      }else{
        console.log("wrong credentials");
      }
    },
    (error)=>{
      alert("Authorisaion Failed/Wrong Credentials: 401");
      console.log(error);
    });
  }
}