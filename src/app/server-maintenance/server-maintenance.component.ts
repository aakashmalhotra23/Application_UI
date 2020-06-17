import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ServerDb } from '../server-db';
import { ServerDbService } from '../shared_service/server-db.service';

@Component({
  selector: 'app-server-maintenance',
  templateUrl: './server-maintenance.component.html',
  styleUrls: ['./server-maintenance.component.css']
})
export class ServerMaintenanceComponent implements OnInit {
  public servers:ServerDb[];
  public serverDb:any={};
  public sno:number;
  
  constructor(private location: Location,private _serverDbService:ServerDbService) { }

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
}

