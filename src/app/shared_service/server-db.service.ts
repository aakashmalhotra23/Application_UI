import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs-compat';
import {ServerDb} from '../server-db';


import { TicketDetails} from '../TicketLayout/ticketdetails';

@Injectable({
  providedIn: 'root'
})
export class ServerDbService {
  private baseUrlForUser:string = 'http://localhost:8080';  
  private baseUrlForServer:string='http://localhost:8080/api';
  private baseUrlForTicket:string='http://localhost:8080/ticket';
  private headers = new Headers({'Content-Type':'application/json'});
  private options = new RequestOptions({headers:this.headers});
  private server:ServerDb;
  public ticket:TicketDetails;
  public ticketinstance:TicketDetails;
  constructor(private _http:Http) { }

  getServers(){
    console.log(this.options);
    return this._http.get(this.baseUrlForServer+'/servers', this.options).map((response)=>response.json()).catch(this.errorHandler);
  }

  getServer(sno:Number){
    return this._http.get(this.baseUrlForServer+'/server/'+sno, this.options).map((response)=>response.json()).catch(this.errorHandler);
  }

  deleteServer(sno:Number){
    return this._http.delete(this.baseUrlForServer+'/deleteServer/'+sno, this.options).map((response)=>response.json()).catch(this.errorHandler);
  }

  createServer(server=this.server){
    return this._http.post(this.baseUrlForServer+'/addServer', JSON.stringify(server), this.options).map((response)=>response.json()).catch(this.errorHandler);
  }

  updateServer(server=this.server){
    return this._http.put(this.baseUrlForServer+'/modify', JSON.stringify(server), this.options).map((response)=>response.json()).catch(this.errorHandler);
  }


  //To fetch Ticket Details & log ticket

  getDetails(EmpId:String){
    return this._http.get(this.baseUrlForTicket+'/get/'+EmpId, this.options).map((response)=>response.json()).catch(this.errorHandler);
  }

  getUserDetails(EmpId:String){
    return this._http.get(this.baseUrlForUser+'/get/'+EmpId, this.options).map((response)=>response.json()).catch(this.errorHandler);
  }
   Logticket(ticket=this.ticket,EmpId:String){
    return this._http.post(this.baseUrlForTicket+'/raise/'+EmpId, JSON.stringify(ticket), this.options).map((response)=>response.json()).catch(this.errorHandler);
  } 
  

  //Error
  errorHandler(error:Response){
    return Observable.throw(error||"SERVER ERROR");
    
  }


  //Getter and Setters
  
  setter(server:ServerDb){
    this.server=server;
  }

  getter(){
    return this.server;
  }

  

}