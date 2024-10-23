import { Property } from "./property";
import { User } from "./user";

export class RentalRequest {
    id: number;
    requestDate: Date;
    status: string;  
    message: string;  
    tenant: User;  
    property: Property;  
  }
  