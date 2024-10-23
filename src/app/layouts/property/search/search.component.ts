import { Component } from '@angular/core';
import { Property } from 'src/app/model/property';
import { PropertyService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  filters = { price: null, type: '', surface: null, localisation: '' }; // Définir les filtres
  results: Property[] = []; // Définir les résultats de recherche

  constructor(private propertyService: PropertyService) {}

  onSearch(): void {
    // Implémentez ici la logique de recherche en fonction des filtres
    this.results = this.propertyService.getProperties().filter(property => {
      return (
        (this.filters.price === null || property.price <= this.filters.price) &&
        (this.filters.type === '' || property.type === this.filters.type) &&
        (this.filters.surface === null || property.surface >= this.filters.surface) &&
        (this.filters.localisation === '' || property.address.includes(this.filters.localisation))
      );
    });
  }
}
