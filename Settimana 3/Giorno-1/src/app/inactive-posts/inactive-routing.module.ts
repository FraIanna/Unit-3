import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InactivePostsComponent } from './inactive-posts.component';

const routes: Routes = [
  {
    path: '',
    component: InactivePostsComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InactiveRoutingModule {}
