import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { RouterLinkWithHref } from '@angular/router';

import {
  ContentWrapperComponent,
  FooterComponent,
  HeaderComponent,
  NewsItemComponent,
  UpcomingEventComponent,
  SectionComponent,
} from '@shared/components';
import { ClickOutsideDirective, ScrollAnchorDirective, ScrollSectionDirective } from '@shared/utils';

@NgModule({
  declarations: [
    ContentWrapperComponent,
    HeaderComponent,
    FooterComponent,
    ClickOutsideDirective,
    NewsItemComponent,
    UpcomingEventComponent,
    ScrollAnchorDirective,
    ScrollSectionDirective,
    SectionComponent,
  ],
  imports: [CommonModule, FormsModule, TranslateModule, RouterLinkWithHref],
  exports: [
    ContentWrapperComponent,
    HeaderComponent,
    FooterComponent,
    ClickOutsideDirective,
    NewsItemComponent,
    UpcomingEventComponent,
    ScrollSectionDirective,
    SectionComponent,
  ],
  providers: [],
})
export class AppSharedModule {}
