import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { FooterDto } from './footer.model';

@Injectable({
  providedIn: 'root',
})
export class FooterService {
  constructor(private _http: HttpClient) {}

  getFooterData(): Observable<FooterDto> {
    // return this._http.get<FooterDto>('');

    return of<FooterDto>({
      administration: [
        {
          name: 'footer.admin_people.KAMEL_YASSILI',
          speciality: 'footer.HEAD_MASTER',
          telephone: '+ (995 322) 29 47 72',
          email: 'secretariat@efc.edu.ge',
        },
        {
          name: 'footer.admin_people.TAMAR_LOMIDZE',
          speciality: 'footer.ADMINISTRATION',
          telephone: '+ (995 322) 29 47 72',
          email: 'secretariat@efc.edu.ge',
        },
      ],
      schoolOffice: {
        speciality: 'footer.SCHOOL_OFFICE',
        telephone: '+ (995 322) 29 47 72',
        email: 'secretariat@efc.edu.ge',
      },
    });
  }
}
