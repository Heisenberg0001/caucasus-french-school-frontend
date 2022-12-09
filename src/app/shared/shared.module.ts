import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { ClickOutsideDirective } from '@shared/utils';
import { ContentWrapperComponent, FooterComponent, HeaderComponent, NewsItemComponent, UpcomingEventComponent } from '@shared/components';
import { RouterLinkWithHref } from '@angular/router';

@NgModule({
  declarations: [ContentWrapperComponent, HeaderComponent, FooterComponent, ClickOutsideDirective, NewsItemComponent, UpcomingEventComponent],
  imports: [CommonModule, FormsModule, TranslateModule, RouterLinkWithHref],
  exports: [ContentWrapperComponent, HeaderComponent, FooterComponent, ClickOutsideDirective, NewsItemComponent, UpcomingEventComponent],
  providers: [],
})
export class AppSharedModule {}
