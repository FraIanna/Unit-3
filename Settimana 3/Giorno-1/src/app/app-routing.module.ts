import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { AuthGuard } from './auth.guard';

const routes: Route[] = [
  {
    path: 'active',
    loadChildren: () =>
      import('./active-posts/active-module.module').then(
        (m) => m.ActiveModuleModule
      ),
  },
  {
    path: 'inactive',
    loadChildren: () =>
      import('./inactive-posts/inactive.module').then((m) => m.InactiveModule),
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
  },
  {
    path: 'post/:id',
    component: PostDetailComponent,
  },
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () =>
      import('./homepage/home.module').then((m) => m.HomeModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
