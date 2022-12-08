import { Injectable, Renderer2 } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

const LANGUAGE = 'LANGUAGE';
const DEFAULT_LANGUAGE = 'en';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  languages: Language[] = [];
  private _currentLanguage!: Language;

  constructor(private translateService: TranslateService, private renderer: Renderer2) {
    this.languages = LANGUAGES;
  }

  get currentLanguage(): Language {
    return this._currentLanguage;
  }

  getPreferredLanguage(): Language {
    let preferredLanguage;
    const preferredLangJSON = localStorage.getItem(LANGUAGE);
    if (preferredLangJSON) {
      preferredLanguage = JSON.parse(preferredLangJSON);
    } else {
      preferredLanguage = LANGUAGES[0];
      localStorage.setItem(LANGUAGE, JSON.stringify(preferredLanguage));
    }
    return preferredLanguage;
  }

  initialize(): void {
    this._currentLanguage = this.getPreferredLanguage();
    this.translateService.addLangs(this.languages.map((x) => x.key));
    this.translateService.setDefaultLang(DEFAULT_LANGUAGE);
    this.use(this._currentLanguage);
  }

  use(language: Language): void {
    this._currentLanguage = language;
    localStorage.setItem(LANGUAGE, JSON.stringify(this._currentLanguage));
    this.translateService.use(language?.key);
    this.changeGlobalStylesByLanguage(this._currentLanguage?.key);
  }

  private changeGlobalStylesByLanguage(languageKey: string): void {
    /* use different font for different language */
    if (languageKey === 'ka') {
      this.renderer.removeClass(document.body, 'font-adieu');
      this.renderer.addClass(document.body, 'font-noto-sans-georgian');
    } else {
      this.renderer.removeClass(document.body, 'font-noto-sans-georgian');
      this.renderer.addClass(document.body, 'font-adieu');
    }
  }
}

export const LANGUAGES: Language[] = [
  { name: 'ENG', key: 'en', locale: 'en-us' },
  { name: 'GEO', key: 'ka', locale: 'ka-ge' },
  { name: 'FR', key: 'fr', locale: 'fr-fr' },
];

export interface Language {
  name: string;
  key: string;
  locale: string;
}
