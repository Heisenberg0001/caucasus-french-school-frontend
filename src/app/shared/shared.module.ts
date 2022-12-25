import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import {
  ContentWrapperComponent,
  FooterComponent,
  HeaderComponent,
  NewsItemComponent,
  UpcomingEventComponent,
  SectionComponent,
} from '@shared/components';
import {
    ClickOutsideDirective,
    ScrollAnchorDirective,
    ScrollSectionDirective
} from '@shared/utils';
import { RouterLinkWithHref } from '@angular/router';
import { TestComponent } from './components/test/test.component';

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
    TestComponent,
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
    TestComponent,
    ScrollSectionDirective,
    SectionComponent,
  ],
  providers: [],
})
export class AppSharedModule {}
