import { Component, OnInit } from '@angular/core';
import { TicketDetails} from '../ticketdetails';
import { ServerDbService } from '../../shared_service/server-db.service';
import { RestapiService } from '../../restapi.service';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit {
  public Tickets:String;
  public Ticket: TicketDetails;
  public TicketInstances:any={};
  public user : String;

  constructor(private ticketservices:ServerDbService,private restservices:RestapiService) {
    this.user = this.restservices.CurrentUser
   }

  ngOnInit():void { 
    this.ticketservices.getDetails(this.user).subscribe((Tickets)=>{
      console.log(Tickets);
      this.Tickets=Tickets;
    },
    (error)=>{
      console.log(error);
    });
  }


  lognewticket(){
    this.ticketservices.ticketinstance=this.TicketInstances;
    
    console.log('Inside ticketinstance setting of data in service is done');
    this.ticketservices.Logticket(this.TicketInstances,this.user).subscribe((data)=>{
      console.log(data);
      alert("Ticket logged Successfully");
    },(error)=>{
      console.log(error);
    });
  }

}