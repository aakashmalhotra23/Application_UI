import { Component, OnInit } from '@angular/core';
import { ServerDb } from '../server-db';
import { ServerDbService } from '../shared_service/server-db.service';
import { RestapiService } from '../restapi.service';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {

  public servers:any;
  public server:ServerDb;
  public sno:number;
  constructor(private _serverDbService:ServerDbService,private service: RestapiService) { }

  ngOnInit():void {
    this._serverDbService.getServers().subscribe((servers)=>{
      console.log(servers);
      this.servers=servers;
    },(error)=>{
      console.log(error);
    });
  }

  Logout(){
    this.service.logout();
  }
  
}
