import { Injectable } from '@angular/core';
import { Property } from 'src/app/model/property';
import { User } from 'src/app/model/user';


@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  private properties: Property[] = [
    {
      id: 1,
      title: 'Appartement au centre-ville',
      description: 'Bel appartement de 3 chambres avec vue sur la ville.',
      price: 1200,
      address: '123 Rue de Paris, Paris',
      surface: 85,
      type: 'Appartement',
      publicationDate: new Date('2024-01-15'),
      owner: { /* Remplissez les détails de l'utilisateur ici */ } as User,
      rentalRequests: [] // Vous pouvez initialiser des demandes de location si nécessaire
    },
    {
      id: 2,
      title: 'Maison avec jardin',
      description: 'Maison spacieuse avec un grand jardin.',
      price: 2500,
      address: '456 Avenue des Champs, Lyon',
      surface: 150,
      type: 'Maison',
      publicationDate: new Date('2024-02-10'),
      owner: { /* Remplissez les détails de l'utilisateur ici */ } as User,
      rentalRequests: [] // Vous pouvez initialiser des demandes de location si nécessaire
    }
    // Ajoutez d'autres propriétés si nécessaire
  ];

  constructor() { }

  getProperties(): Property[] {
    return this.properties;
  }

  getPropertyById(id: number): Property | undefined {
    return this.properties.find(property => property.id === id);
  }

  addProperty(property: Property): void {
    this.properties.push(property);
  }

  // Ajoutez d'autres méthodes pour manipuler les propriétés selon vos besoins
}
