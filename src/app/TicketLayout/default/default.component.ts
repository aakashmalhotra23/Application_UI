import { Component, OnInit } from '@angular/core';
import { TicketDetails} from '../ticketdetails';
import { ServerDbService } from '../../shared_service/server-db.service';
import { RestapiService } from '../../restapi.service';
import { LoginDetails } from '../LoginDetails';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit {
  public Tickets:any;
  public Ticket: TicketDetails;
  public TicketInstances:any={};
  public user : String;
  public userFromTicekt : LoginDetails;
  public UserDetails : any;

  constructor(private ticketservices:ServerDbService,private restservices:RestapiService) {
    this.user = this.restservices.CurrentUser;

   }

  ngOnInit():void { 
    this.ticketservices.getDetails(this.user).subscribe((Tickets)=>{
      console.log(Tickets);
      this.Tickets = Tickets;
    
      this.ticketservices.getUserDetails(this.user).subscribe((UserDetails) => {
        console.log(UserDetails);
        this.UserDetails = UserDetails;
        console.log(this.UserDetails.phone);
      },
      (error)=>{
        console.log(error);
      });  
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