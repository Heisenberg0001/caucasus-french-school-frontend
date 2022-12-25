import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    /* loadComponent: () => import('./pages/home/home.component').then((c) => c.HomeComponent), */
  },
  {
    path: 'about-us',
    loadComponent: () => import('./pages/about-us/about-us.component').then((c) => c.AboutUsComponent),
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
