import { PhotosService } from './../../../photos.service';
import { Component } from '@angular/core';
import { iPhotos } from '../../../Models/photos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  photosArr: iPhotos[] = [];
  favoritePhotos: iPhotos[] = [];
  totalFavoritePhotos: number = 0;

  constructor(private photosSvc: PhotosService) {}
  ngOnInit() {
    this.photosSvc.getPhotos().subscribe((photo) => {
      this.photosArr = photo;
      this.photosSvc.cart$.subscribe((photo) => {
        this.favoritePhotos.push(photo);
        this.totalFavoritePhotos = this.favoritePhotos.length;
      });
    });
  }
  delete(id: number) {
    this.photosSvc.delete(id).subscribe(() => {
      this.photosArr = this.photosArr.filter((p) => p.id !== id);
      this.favoritePhotos = this.favoritePhotos.filter((p) => p.id !== id);
      console.log(this.photosArr);
    });
  }
  addToFavorite(card: iPhotos) {
    this.photosSvc.addToFavorite(card);
    console.log(this.favoritePhotos);
  }
}
