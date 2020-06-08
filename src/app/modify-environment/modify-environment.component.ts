import { Component, OnInit } from '@angular/core';
import { ServerDbService } from '../shared_service/server-db.service';
import { ServerDb } from '../server-db';
import { Location } from '@angular/common';
import {Router} from "@angular/router"

@Component({
  selector: 'app-modify-environment',
  templateUrl: './modify-environment.component.html',
  styleUrls: ['./modify-environment.component.css']
})
export class ModifyEnvironmentComponent implements OnInit {

  public servers:ServerDb[];
  public serverDb:any={};
  public sno:number;
  constructor(private router: Router, private _serverDbService:ServerDbService) { }

  ngOnInit() {
    this._serverDbService.getServers().subscribe((servers)=>{
      console.log(servers);
      this.servers=servers;
      
    },(error)=>{
      console.log(error);
    });
  }
  deleteServer(sno){
    this._serverDbService.deleteServer(sno).subscribe((data)=>{
      this.servers.splice(this.servers.indexOf(sno), 1);
    },(error)=>{
      console.log(error);
    });
  }
  
  edit(server){
    
    this._serverDbService.setter(server);
    console.log(server.environment+`inside edit()`);
    this.router.navigate(['/edit']);
  }
  
}
