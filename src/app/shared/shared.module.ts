import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentWrapperComponent, FooterComponent, HeaderComponent } from './components';
import { ClickOutsideDirective } from './utils';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [ContentWrapperComponent, HeaderComponent, FooterComponent, ClickOutsideDirective],
  imports: [CommonModule, FormsModule],
  exports: [ContentWrapperComponent, HeaderComponent, FooterComponent, ClickOutsideDirective, ClickOutsideDirective],
  providers: [],
})
export class AppSharedModule {}
