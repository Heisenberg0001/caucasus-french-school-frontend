import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import {ClickOutsideDirective} from "@shared/utils";
import {ContentWrapperComponent, FooterComponent, HeaderComponent} from "@shared/components";

@NgModule({
  declarations: [ContentWrapperComponent, HeaderComponent, FooterComponent, ClickOutsideDirective],
  imports: [CommonModule, FormsModule, TranslateModule],
  exports: [ContentWrapperComponent, HeaderComponent, FooterComponent, ClickOutsideDirective, ClickOutsideDirective],
  providers: [],
})
export class AppSharedModule {}
