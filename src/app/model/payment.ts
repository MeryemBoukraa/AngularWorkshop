import { RentalContract } from "./rentalContract";

export class Payment {
    id: number;
    amount: number;  
    paymentDate: Date;
    paymentMethod: string;  
    contract: RentalContract;  
  }
  