import { Component, OnInit } from '@angular/core';
import { Property } from 'src/app/model/property';
import { PropertyService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  recentProperties: Property[] = []; // Pour stocker les propriétés récentes

  constructor(private propertyService: PropertyService) {}

  ngOnInit(): void {
    this.loadRecentProperties();
  }

  loadRecentProperties(): void {
    // Ici vous pouvez récupérer les propriétés les plus récentes
    this.recentProperties = this.propertyService.getProperties().slice(-5); // Récupère les 5 dernières propriétés
  }
}
