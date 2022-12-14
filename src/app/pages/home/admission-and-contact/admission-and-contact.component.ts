import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { getCurrentMonthName, getCurrentWeekDayName } from '@shared/utils/functions';
import { LanguageService } from '@core/services';

@Component({
  selector: 'app-admission-and-contact',
  templateUrl: './admission-and-contact.component.html',
  styleUrls: ['./admission-and-contact.component.scss'],
})
export class AdmissionAndContactComponent implements OnInit {
  month: string = `month.${getCurrentMonthName().toUpperCase()}`;
  weekDay: string = `day.${getCurrentWeekDayName().toUpperCase()}`;
  dayNumber: number = new Date().getDate();
  hoverText: string = 'LFS I online open house Thursday, June 22 at 4:00 p.m.';
  registrationForm$: Observable<string> = new Observable<string>();
  bankDetails$: Observable<string> = new Observable<string>();

  get currentLangIsGeorgian(): boolean {
    return this.languageService.currentLanguage.key === 'ka';
  }

  constructor(private languageService: LanguageService) {}

  openWriteUsDialog(): void {
    return;
  }

  ngOnInit(): void {
    this.registrationForm$ = of('assets/icons/file.svg');
    this.bankDetails$ = of('assets/icons/file.svg');
  }
}
