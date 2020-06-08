import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs-compat';
import {ServerDb} from '../server-db';
import { Server } from 'http';

@Injectable({
  providedIn: 'root'
})
export class ServerDbService {
  
  private baseUrl:string='http://localhost:8080/api';
  private headers = new Headers({'Content-Type':'application/json'});
  private options = new RequestOptions({headers:this.headers});
  private server:ServerDb;
  constructor(private _http:Http) { }

  getServers(){
    return this._http.get(this.baseUrl+'/servers', this.options).map((response)=>response.json()).catch(this.errorHandler);
  }

  getServer(sno:Number){
    return this._http.get(this.baseUrl+'/server/'+sno, this.options).map((response)=>response.json()).catch(this.errorHandler);
  }

  deleteServer(sno:Number){
    return this._http.delete(this.baseUrl+'/deleteServer/'+sno, this.options).map((response)=>response.json()).catch(this.errorHandler);
  }

  createServer(server=this.server){
    return this._http.post(this.baseUrl+'/addServer', JSON.stringify(server), this.options).map((response)=>response.json()).catch(this.errorHandler);
  }

  updateServer(server=this.server){
    return this._http.put(this.baseUrl+'/modify', JSON.stringify(server), this.options).map((response)=>response.json()).catch(this.errorHandler);
  }

  errorHandler(error:Response){
    return Observable.throw(error||"SERVER ERROR");
    
  }

  setter(server:ServerDb){
    this.server=server;
  }

  getter(){
    return this.server;
  }
}