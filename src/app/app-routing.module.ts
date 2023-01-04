import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages';
import {PageNotFoundComponent} from "@shared/components";

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  /* OUR SCHOOL */
  {
    path: 'about-us',
    loadComponent: () => import('./pages/our-school/about-us/about-us.component').then((c) => c.AboutUsComponent),
  },
  {
    path: 'facilities',
    loadComponent: () => import('./shared/components/page-not-found/page-not-found.component').then((c) => c.PageNotFoundComponent),
  },
  {
    path: 'administration',
    loadComponent: () => import('./shared/components/page-not-found/page-not-found.component').then((c) => c.PageNotFoundComponent),
  },
  {
    path: 'join-our-team',
    loadComponent: () => import('./shared/components/page-not-found/page-not-found.component').then((c) => c.PageNotFoundComponent),
  },
  {
    path: 'administration',
    loadComponent: () => import('./shared/components/page-not-found/page-not-found.component').then((c) => c.PageNotFoundComponent),
  },
  {
    path: 'partners-and-sponsors',
    loadComponent: () => import('./shared/components/page-not-found/page-not-found.component').then((c) => c.PageNotFoundComponent),
  },
  {
    path: 'contact',
    loadComponent: () => import('./shared/components/page-not-found/page-not-found.component').then((c) => c.PageNotFoundComponent),
  },
  /* OUR SCHOOL */
  /* ----------------------------------------------------------------------------------------------------------- */
  /* LEARNING */
  {
    path: 'preschool',
    loadComponent: () => import('./shared/components/page-not-found/page-not-found.component').then((c) => c.PageNotFoundComponent),
  },
  {
    path: 'primary',
    loadComponent: () => import('./shared/components/page-not-found/page-not-found.component').then((c) => c.PageNotFoundComponent),
  },
  {
    path: 'middle-school',
    loadComponent: () => import('./shared/components/page-not-found/page-not-found.component').then((c) => c.PageNotFoundComponent),
  },
  {
    path: 'high-school',
    loadComponent: () => import('./shared/components/page-not-found/page-not-found.component').then((c) => c.PageNotFoundComponent),
  },
  {
    path: 'extracurricular-activities',
    loadComponent: () => import('./shared/components/page-not-found/page-not-found.component').then((c) => c.PageNotFoundComponent),
  },
  {
    path: 'school-and-university-guidance',
    loadComponent: () => import('./shared/components/page-not-found/page-not-found.component').then((c) => c.PageNotFoundComponent),
  },
  /* LEARNING */
  /* ----------------------------------------------------------------------------------------------------------- */
  /* SCHOOL LIFE */
  {
    path: 'practical-information',
    loadComponent: () => import('./shared/components/page-not-found/page-not-found.component').then((c) => c.PageNotFoundComponent),
  },
  {
    path: 'calendar',
    loadComponent: () => import('./shared/components/page-not-found/page-not-found.component').then((c) => c.PageNotFoundComponent),
  },
  {
    path: 'middle-school',
    loadComponent: () => import('./shared/components/page-not-found/page-not-found.component').then((c) => c.PageNotFoundComponent),
  },
  {
    path: 'news',
    loadComponent: () => import('./shared/components/page-not-found/page-not-found.component').then((c) => c.PageNotFoundComponent),
  },
  {
    path: 'library',
    loadComponent: () => import('./shared/components/page-not-found/page-not-found.component').then((c) => c.PageNotFoundComponent),
  },
  {
    path: 'cafeteria',
    loadComponent: () => import('./shared/components/page-not-found/page-not-found.component').then((c) => c.PageNotFoundComponent),
  },
  /* SCHOOL LIFE */
  /* ----------------------------------------------------------------------------------------------------------- */
  /* COMMUNITY */
  {
    path: 'parents-association',
    loadComponent: () => import('./shared/components/page-not-found/page-not-found.component').then((c) => c.PageNotFoundComponent),
  },
  {
    path: 'alumni',
    loadComponent: () => import('./shared/components/page-not-found/page-not-found.component').then((c) => c.PageNotFoundComponent),
  },
  /* COMMUNITY */
  /* ----------------------------------------------------------------------------------------------------------- */
  /* ADMISSION */
  {
    path: 'why-efc',
    loadComponent: () => import('./shared/components/page-not-found/page-not-found.component').then((c) => c.PageNotFoundComponent),
  },
  {
    path: 'enrollment',
    loadComponent: () => import('./shared/components/page-not-found/page-not-found.component').then((c) => c.PageNotFoundComponent),
  },
  /* ADMISSION */
  /* ----------------------------------------------------------------------------------------------------------- */
  /* OTHER */
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
