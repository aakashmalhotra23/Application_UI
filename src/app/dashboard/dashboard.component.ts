import { Component, OnInit } from '@angular/core';
import { RestapiService } from '../restapi.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  user: String ;
  constructor(private service: RestapiService) { }

  ngOnInit() {
    this.user = sessionStorage.getItem("username");
  }

  Logout(){
    this.service.logout();
  }
}
