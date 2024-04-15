import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SortByPricePipe } from '../sort-by-price.pipe';
import { FilterByNamePipe } from '../filter-by-name.pipe';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';
import { ProductsService } from '../products.service';

interface Product {
  id: number;
  imageUrl: string;
  name: string;
  price: number;
}

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, SortByPricePipe, FilterByNamePipe, FormsModule, RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})

export class ProductsComponent implements OnInit{
  products: Product[] = [];
  constructor(private router: Router, private productsService: ProductsService) {}

  ngOnInit(): void {
    this.products = this.productsService.getAllProducts();
  }

  goToProductDetail(productId: number){
    this.router.navigate(['/produits', productId]);
  }

  ascending: boolean = true;
  searchTerm: string = '';

  toggleSort() {
    this.ascending = !this.ascending;
  }
}
