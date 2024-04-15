import { Component, OnInit, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { ProductsService } from '../products.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-produits',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent],
  templateUrl: './produits.component.html',
  styleUrl: './produits.component.css'
})

export class ProduitsComponent implements OnInit{
  product: any;

  constructor(private route: ActivatedRoute, private productsService: ProductsService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const productId = Number(params.get('id'));
      this.product = this.productsService.getProductById(productId);
    })
  }
}
