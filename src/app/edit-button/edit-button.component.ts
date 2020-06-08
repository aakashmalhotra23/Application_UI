import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ServerDb } from '../server-db';
import { ServerDbService } from '../shared_service/server-db.service';

@Component({
  selector: 'app-edit-button',
  templateUrl: './edit-button.component.html',
  styleUrls: ['./edit-button.component.css']
})
export class EditButtonComponent implements OnInit {
  public servers:ServerDb[];
  public serverDb:any={};
  public sno:number;
  
  constructor(private location: Location,private _serverDbService:ServerDbService) { }

  ngOnInit() {
    this.serverDb=this._serverDbService.getter();
  }
  
  updateServer(server=this.serverDb){
    this._serverDbService.updateServer(server).subscribe((data:any[])=>{
      console.log(data);
    },(error)=>{
      console.log(error);
    });
  }
  goBack(){
    this.location.back();
  }
}