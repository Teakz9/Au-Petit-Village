import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products = [
    {id: 1, imageUrl: 'assets/images/Figurine-Asterix.jpg', name:'Astérix', description:'Nos figurines sont faites à la main, avec des matériaux recyclables et de la peinture non toxique pour notre environnement. Nos produits sont certifiés 100% Français.', price: 35.00},
    {id: 2, imageUrl: 'assets/images/Figurine-Obelix.jpg', name:'Obélix', description:'Nos figurines sont faites à la main, avec des matériaux recyclables et de la peinture non toxique pour notre environnement. Nos produits sont certifiés 100% Français.', price: 40.00},
    {id: 3, imageUrl: 'assets/images/Figurine-Idefix.jpg', name:'Idéfix', description:'Nos figurines sont faites à la main, avec des matériaux recyclables et de la peinture non toxique pour notre environnement. Nos produits sont certifiés 100% Français.', price: 32.00},
    {id: 4, imageUrl: 'assets/images/Figurine-Panoramix.jpg', name:'Panoramix', description:'Nos figurines sont faites à la main, avec des matériaux recyclables et de la peinture non toxique pour notre environnement. Nos produits sont certifiés 100% Français.', price: 30.00},
    {id: 5, imageUrl: 'assets/images/Figurine-Abraracourcix.jpg', name:'Abraracourcix', description:'Nos figurines sont faites à la main, avec des matériaux recyclables et de la peinture non toxique pour notre environnement. Nos produits sont certifiés 100% Français.', price: 33.00},
    {id: 6, imageUrl: 'assets/images/Figurine-Bonemine.jpg', name:'Bonemine', description:'Nos figurines sont faites à la main, avec des matériaux recyclables et de la peinture non toxique pour notre environnement. Nos produits sont certifiés 100% Français.', price: 28.00},
    {id: 7, imageUrl: 'assets/images/Figurine-Cetautomatix.jpg', name:'Cetautomatix', description:'Nos figurines sont faites à la main, avec des matériaux recyclables et de la peinture non toxique pour notre environnement. Nos produits sont certifiés 100% Français.', price: 26.00},
    {id: 8, imageUrl: 'assets/images/Figurine-Falbala.jpg', name:'Falbala', description:'Nos figurines sont faites à la main, avec des matériaux recyclables et de la peinture non toxique pour notre environnement. Nos produits sont certifiés 100% Français.', price: 35.00},
    {id: 9, imageUrl: 'assets/images/Figurine-JulesCesar.jpg', name:'Jules César', description:'Nos figurines sont faites à la main, avec des matériaux recyclables et de la peinture non toxique pour notre environnement. Nos produits sont certifiés 100% Français.', price: 34.00},
    {id: 10, imageUrl: 'assets/images/Figurine-Agecanomix.jpg', name:'Agecanomix', description:'Nos figurines sont faites à la main, avec des matériaux recyclables et de la peinture non toxique pour notre environnement. Nos produits sont certifiés 100% Français.', price: 24.00},
  ]

  constructor() { }

  getAllProducts(){
    return this.products;
  }

  getProductById(id: number){
    return this.products.find(product => product.id === id);
  }
}
