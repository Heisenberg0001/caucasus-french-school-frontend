import { Component, OnInit } from '@angular/core';
import {LanguageService} from "@core/services";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [LanguageService],
})
export class AppComponent implements OnInit {
  title = 'Caucasus French School';

  constructor(private languageService: LanguageService) {}

  ngOnInit(): void {
    this.languageService.initialize();
  }
}
