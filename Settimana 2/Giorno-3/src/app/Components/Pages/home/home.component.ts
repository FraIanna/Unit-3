import { Component } from '@angular/core';
import { ProductsService } from '../../../products.service';
import { iProduct, iProducts } from '../../../Models/products';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(private producsSvc: ProductsService) {}

  products!: iProducts;
  productsArr: iProduct[] = [];

  ngOnInit() {
    this.producsSvc.getAll().subscribe((products) => {
      this.products = products;
      this.productsArr = products.products;
    });
  }
}
