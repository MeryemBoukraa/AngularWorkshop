import { Property } from "./property";
import { RentalRequest } from "./rentalRequest";

export class User {
    id: number;
    name: string;
    email: string;
    password: string;
    role: string;
    properties: Property[];  
    rentalRequests: RentalRequest[];  
  }
  