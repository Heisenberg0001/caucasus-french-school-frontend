import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent, VideoIntroductionComponent, NewsAndArticlesComponent } from './home';

@NgModule({
  declarations: [HomeComponent, VideoIntroductionComponent, NewsAndArticlesComponent],
  imports: [CommonModule],
  exports: [HomeComponent, VideoIntroductionComponent],
})
export class PagesModule {}
