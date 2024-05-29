import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { iProduct, iProducts } from './Models/products';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  apiUrl: string = 'https://dummyjson.com/products';

  constructor(private http: HttpClient) {}

  getAll(): Observable<iProducts> {
    return this.http.get<iProducts>(this.apiUrl);
  }

  getById(id: number): Observable<iProduct> {
    return this.http.get<iProduct>(`${this.apiUrl}/${id}`);
  }

  delete(id: number) {
    return this.http.delete<iProduct>(`${this.apiUrl}/${id}`);
  }

  addProductToArray(array: iProduct[], product: iProduct) {
    if (!array.find((p) => p.id === product.id)) {
      array.push(product);
      console.log(array);
    }
  }
}
