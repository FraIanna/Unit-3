import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage.component';
import { HomeRoutingModule } from './home-routing.module';
import { SinglePostComponent } from '../single-post/single-post.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [HomepageComponent, SinglePostComponent],
  imports: [CommonModule, HomeRoutingModule, FormsModule],
})
export class HomeModule {}
