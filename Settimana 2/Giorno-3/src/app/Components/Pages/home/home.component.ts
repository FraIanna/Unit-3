import { Component } from '@angular/core';
import { ProductsService } from '../../../products.service';
import { iProduct, iProducts } from '../../../Models/products';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(private productsSvc: ProductsService) {}

  productsArr: iProduct[] = [];
  savedProducts: iProduct[] = [];
  shoppingCartArr: iProduct[] = [];

  ngOnInit() {
    this.productsSvc.getAll().subscribe((products) => {
      this.productsArr = products.products;
    });
  }

  saveProduct(product: iProduct) {
    this.productsSvc.addProductToArray(this.savedProducts, product);
  }

  addToCart(product: iProduct) {
    this.productsSvc.addProductToArray(this.shoppingCartArr, product);
  }
}
