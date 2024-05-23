import { Injectable } from '@angular/core';
import { iPost } from './Models/i-post';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  postArray: iPost[] = [];

  private postUrl = '../assets/db.json';

  async getPosts() {
    try {
      let response = await fetch(this.postUrl);
      if (!response.ok) {
        throw new Error(`Errore, status: ${response.status}`);
      }
      let jsonContent = await response.json();
      this.postArray = jsonContent.posts;
      console.log(this.postArray);
      return this.postArray;
    } catch (e) {
      console.log(e, 'Si è verificato un errore nel recupero dei dati');
      return [];
    }
  }

  getall(): iPost[] {
    return this.postArray;
  }

  getById(id: number) {
    const filteredPost = this.postArray.find((post) => post.id == id);
    if (filteredPost) return filteredPost;
    else throw new Error('Post non trovato');
  }

  constructor() {
    this.getPosts();
  }
}
