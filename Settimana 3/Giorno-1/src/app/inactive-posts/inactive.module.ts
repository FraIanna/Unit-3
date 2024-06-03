import { NgModule } from '@angular/core';
import { InactivePostsComponent } from './inactive-posts.component';
import { CommonModule } from '@angular/common';
import { InactiveRoutingModule } from './inactive-routing.module';

@NgModule({
  declarations: [InactivePostsComponent],
  imports: [CommonModule, InactiveRoutingModule],
})
export class InactiveModule {}
