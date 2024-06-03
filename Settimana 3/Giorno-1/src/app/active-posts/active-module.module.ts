import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivePostsComponent } from './active-posts.component';
import { ActiveRoutingModule } from './active-routing.module';

@NgModule({
  declarations: [ActivePostsComponent],
  imports: [CommonModule, ActiveRoutingModule],
})
export class ActiveModuleModule {}
