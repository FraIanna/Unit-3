import { Component } from '@angular/core';
import { iPost } from '../../Models/i-post';
import { PostService } from '../../post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  postArray: iPost[] = [];
  random: iPost[] = [];
  tagArr: string[] = [];
  selectedTag: string | null = null;
  modifyPost: boolean = false;

  currentPost!: iPost;

  constructor(private postSvc: PostService) {}

  ngOnInit() {
    this.postArray = this.postSvc.allPosts;
    this.tagArr = this.postSvc.getAllTags();
    this.randomPosts(4);
  }

  randomPosts(count: number) {
    const shuffled = this.postArray.slice(1).sort(() => 0.5 - Math.random());
    this.random = shuffled.slice(0, count);
  }

  filteredPost(tag: string) {
    this.selectedTag = tag;
    this.postArray = this.postSvc.filteredPost(tag);
  }

  toggleModifyPost() {
    this.modifyPost = !this.modifyPost;
  }
}
