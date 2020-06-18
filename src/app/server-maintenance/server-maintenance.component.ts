import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ServerDb } from '../server-db';
import { ServerDbService } from '../shared_service/server-db.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RestapiService } from '../restapi.service';

@Component({
  selector: 'app-server-maintenance',
  templateUrl: './server-maintenance.component.html',
  styleUrls: ['./server-maintenance.component.css']
})
export class ServerMaintenanceComponent implements OnInit {
  public servers:ServerDb[];
  public serverDb:any={};
  public sno:number;
  form = new FormGroup({
    server: new FormControl('', Validators.required ),
    server_instance: new FormControl('', Validators.required),
    environment: new FormControl('', Validators.required),
    port: new FormControl('', Validators.required),
    downtime: new FormControl('', Validators.required),
    status: new FormControl('', Validators.required)

  });

  get f(){
    return this.form.controls;
    
  }
  submit(){
    console.log(this.form.value);
  }
  
  constructor(private location: Location,private _serverDbService:ServerDbService,private service: RestapiService) { }

  ngOnInit() {
    
  }
  goBack(){
    this.location.back();
  }

  addServer(){
    this._serverDbService.setter(this.serverDb);
    console.log('Inside addServer() setting of data in service is done');
    this._serverDbService.createServer(this.serverDb).subscribe((data)=>{
      console.log(data);
      alert("Saved Successfully");
    },(error)=>{
      console.log(error);
    });
   }

   Logout(){
     this.service.logout();
   }
}

