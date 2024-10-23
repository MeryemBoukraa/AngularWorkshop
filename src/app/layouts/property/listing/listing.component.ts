import { Component, OnInit } from '@angular/core';
import { PropertyService } from 'src/app/shared/services/data.service';
import { Property } from 'src/app/model/property';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {
  properties: Property[] = []; // Définir la propriété 'properties'

  constructor(private propertyService: PropertyService) {}

  ngOnInit(): void {
    this.loadProperties(); // Charger les propriétés lors de l'initialisation
  }

  loadProperties(): void {
    this.properties = this.propertyService.getProperties(); // Récupérer les propriétés
  }
}
