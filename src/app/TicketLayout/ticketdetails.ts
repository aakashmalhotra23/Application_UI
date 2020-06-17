import { LoginDetails } from './loginDetails';

export class TicketDetails {
    ticketId : String;
    category : String;
    branch : String;
    description : String;
    issuedAt : Date;
    user : LoginDetails;
}
