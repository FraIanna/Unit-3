import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { iPhotos } from './Models/photos';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PhotosService {
  apiUrl: string = 'https://jsonplaceholder.typicode.com/photos';
  cartSubject = new Subject<iPhotos>();
  cart$ = this.cartSubject.asObservable();

  constructor(private http: HttpClient) {}

  getPhotos(): Observable<iPhotos[]> {
    return this.http.get<iPhotos[]>(this.apiUrl);
  }

  delete(id: number) {
    return this.http.delete<iPhotos>(`${this.apiUrl}/${id}`);
  }

  addToFavorite(card: iPhotos) {
    this.cartSubject.next(card);
  }
}
