import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';

import { FooterService } from './footer.service';
import { FooterDto } from './footer.model';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  providers: [FooterService],
})
export class FooterComponent implements OnInit {
  footerData: FooterDto = {
    administration: [],
    schoolOffice: {
      speciality: '',
      telephone: '',
      email: '',
    },
  };
  constructor(private _footerService: FooterService) {}

  ngOnInit(): void {
    this._footerService
      .getFooterData()
      .pipe(tap((payload) => (this.footerData = payload)))
      .subscribe();
  }
}
