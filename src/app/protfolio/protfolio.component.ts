import { Component } from '@angular/core';

@Component({
  selector: 'app-protfolio',
  imports: [],
  templateUrl: './protfolio.component.html',
  styleUrl: './protfolio.component.css',
  standalone:true
})
export class ProtfolioComponent {
  images: string[] = [
    '/poert1.png',
    '/port2.png',
    '/port3.png',
    '/poert1.png',
    '/port2.png',
    '/port3.png',
  ];

  isModalOpen: boolean = false;
  currentImage: string | null = null;

  showImage(imageUrl: string): void {
    this.currentImage = imageUrl;
    this.isModalOpen = true;
    console.log("Clicked image:", imageUrl); // Log the clicked image
    console.log("Modal state:", this.isModalOpen); // Log modal state
  }
  
  
}
