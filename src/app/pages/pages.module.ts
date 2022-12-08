import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent, VideoIntroductionComponent, NewsAndArticlesComponent } from './home';
import { AppSharedModule } from '@shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [HomeComponent, VideoIntroductionComponent, NewsAndArticlesComponent],
  imports: [CommonModule, AppSharedModule, TranslateModule],
  exports: [HomeComponent, VideoIntroductionComponent, NewsAndArticlesComponent],
})
export class PagesModule {}
