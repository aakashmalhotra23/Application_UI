import { Component, OnInit } from '@angular/core';
import { TicketDetails} from '../ticketdetails';
import { ServerDbService } from '../../shared_service/server-db.service';
import { RestapiService } from '../../restapi.service';
import { LoginDetails } from '../LoginDetails';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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
  public sessionValue : string;
  
  form = new FormGroup({
    Branch: new FormControl('', Validators.required),
    //mob: new FormControl('', [Validators.required, Validators.minLength(10)]),
    Requests: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required)
  });
  get f(){
    return this.form.controls;
  }
  submit(){
    console.log(this.form.value);
  }
  
  constructor(private ticketservices:ServerDbService,private restservices:RestapiService) {
    this.user = sessionStorage.getItem("username");

   }

  ngOnInit():void { 
    this.sessionValue = sessionStorage.getItem("username");
    this.ticketservices.getDetails(this.sessionValue).subscribe((Tickets)=>{
      console.log(Tickets);
      this.Tickets = Tickets;
    
      this.ticketservices.getUserDetails(this.sessionValue).subscribe((UserDetails) => {
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
    this.ticketservices.Logticket(this.TicketInstances,this.sessionValue).subscribe((data)=>{
      console.log(data);
      alert("Ticket logged Successfully");
    },(error)=>{
      console.log(error);
    });
  }
  
}