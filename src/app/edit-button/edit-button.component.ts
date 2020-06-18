import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ServerDb } from '../server-db';
import { ServerDbService } from '../shared_service/server-db.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RestapiService } from '../restapi.service';

@Component({
  selector: 'app-edit-button',
  templateUrl: './edit-button.component.html',
  styleUrls: ['./edit-button.component.css']
})
export class EditButtonComponent implements OnInit {
  public servers:ServerDb[];
  public serverDb:any={};
  public sno:number;

  form = new FormGroup({
    sno: new FormControl('', Validators.required ),
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
  
  constructor(private location: Location,private _serverDbService:ServerDbService,private service: RestapiService) { }

  ngOnInit() {
    this.serverDb=this._serverDbService.getter();
  }
  
  updateServer(server=this.serverDb){
    this._serverDbService.updateServer(server).subscribe((data:any[])=>{
      console.log(data);
      alert("Saved succesfully");
      window.location.reload();
    },(error)=>{
      console.log(error);
    });
  }
  goBack(){
    this.location.back();
  }

  Logout(){
    this.service.logout();
  }
}