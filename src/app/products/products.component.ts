import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SortByPricePipe } from '../sort-by-price.pipe';
import { FilterByNamePipe } from '../filter-by-name.pipe';
import { FormsModule } from '@angular/forms';

interface Product {
  id: number;
  imageUrl: string;
  name: string;
  price: number;
}

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, SortByPricePipe, FilterByNamePipe, FormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})

export class ProductsComponent {
  products: Product[] = [
    {id: 1, imageUrl: 'assets/images/Figurine-Asterix.jpg', name:'Astérix', price: 35.00},
    {id: 2, imageUrl: 'assets/images/Figurine-Obelix.jpg', name:'Obélix', price: 40.00},
    {id: 3, imageUrl: 'assets/images/Figurine-Idefix.jpg', name:'Idéfix', price: 32.00},
    {id: 4, imageUrl: 'assets/images/Figurine-Panoramix.jpg', name:'Panoramix', price: 30.00},
    {id: 5, imageUrl: 'assets/images/Figurine-Abraracourcix.jpg', name:'Abraracourcix', price: 33.00},
    {id: 6, imageUrl: 'assets/images/Figurine-Bonemine.jpg', name:'Bonemine', price: 28.00},
    {id: 7, imageUrl: 'assets/images/Figurine-Cetautomatix.jpg', name:'Cetautomatix', price: 26.00},
    {id: 8, imageUrl: 'assets/images/Figurine-Falbala.jpg', name:'Falbala', price: 35.00},
    {id: 9, imageUrl: 'assets/images/Figurine-JulesCesar.jpg', name:'Jules César', price: 34.00},
    {id: 10, imageUrl: 'assets/images/Figurine-Agecanomix.jpg', name:'Agecanomix', price: 24.00},
  ];

  ascending: boolean = true;
  searchTerm: string = '';

  toggleSort() {
    this.ascending = !this.ascending;
  }
}
