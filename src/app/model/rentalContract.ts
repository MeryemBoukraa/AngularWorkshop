import { Property } from "./property";
import { User } from "./user";

export class RentalContract {
    id: number;
    signatureDate: Date;
    startDate: Date;
    endDate: Date;
    amount: number;  
    tenant: User;  
    owner: User;  
    property: Property;  
  }
  