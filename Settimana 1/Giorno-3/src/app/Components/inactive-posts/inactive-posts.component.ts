import { Component } from '@angular/core';
import { iObj, iPost } from '../../Models/i-post';

@Component({
  selector: 'app-inactive-posts',
  templateUrl: './inactive-posts.component.html',
  styleUrl: './inactive-posts.component.scss',
})
export class InactivePostsComponent {
  postArray: iPost[] = [];
  random: iPost[] = [];

  ngOnInit() {
    fetch('../../../assets/db.json')
      .then((response) => response.json())
      .then((data: iObj) => {
        this.postArray = data.posts;
        this.randomPosts(4);
        console.log(this.postArray);
      })
      .catch((error) => {
        console.log('Errore nel recupero dei dati', error);
      });
  }

  randomPosts(count: number) {
    const shuffled = this.postArray.slice(1).sort(() => 0.5 - Math.random());
    this.random = shuffled.slice(0, count);
  }
  getInactivePosts(): iPost[] {
    return this.postArray.filter((post) => !post.active);
  }
}
