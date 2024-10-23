import { RentalRequest } from "./rentalRequest";
import { User } from "./user";

export class Property {
    id: number;
    title: string;
    description: string;
    price: number;
    address: string;
    surface: number;
    type: string;  
    publicationDate: Date;
    owner: User;  
    rentalRequests: RentalRequest[];  
  }
  