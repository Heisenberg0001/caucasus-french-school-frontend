import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    /* loadComponent: () => import('./pages/home/home.component').then((c) => c.HomeComponent), */
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
