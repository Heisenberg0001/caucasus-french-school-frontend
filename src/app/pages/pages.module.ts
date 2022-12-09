import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CarouselModule } from 'primeng/carousel';
import { AppSharedModule } from '@shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { HomeComponent, VideoIntroductionComponent, NewsAndArticlesComponent, StudentStoriesCarouselComponent } from './home';

@NgModule({
  declarations: [HomeComponent, VideoIntroductionComponent, NewsAndArticlesComponent, StudentStoriesCarouselComponent],
  imports: [CommonModule, RouterModule, AppSharedModule, TranslateModule, CarouselModule],
  exports: [HomeComponent],
})
export class PagesModule {}
