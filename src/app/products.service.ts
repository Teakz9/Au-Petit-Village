import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products = [
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
  ]

  constructor() { }

  getAllProducts(){
    return this.products;
  }

  getProductById(id: number){
    return this.products.find(product => product.id === id);
  }
}
