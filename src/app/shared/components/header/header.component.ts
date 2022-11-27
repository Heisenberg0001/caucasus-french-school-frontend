import { Component, OnInit } from '@angular/core';
import { LanguageView, MenuItem } from './header.models';
import { HeaderService } from './header.service';
import { LanguageService } from '@core/services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [HeaderService],
})
export class HeaderComponent implements OnInit {
  searchText: string = '';
  isMenuOpen: boolean = false;
  isLanguagesOpen: boolean = false;
  isSearchExpanded: boolean = false;
  menuProNoteVisible: boolean = false;
  selectedLanguage!: LanguageView;

  constructor(private headerService: HeaderService, private languageService: LanguageService) {}

  get menuItems(): MenuItem[] {
    return this.headerService.menuItems;
  }
  get languages(): LanguageView[] {
    return this.headerService.languages;
  }

  ngOnInit(): void {
    this.selectedLanguage = this.languageService.getPreferredLanguage();
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
    this.headerService.menuItems = this.menuItems.map((item: MenuItem) => ({ ...item, isOpen: false }));
  }

  toggleMenuSubList(listItem: MenuItem): void {
    this.headerService.menuItems = this.menuItems.map((item: MenuItem) => ({
      ...item,
      isOpen: item.label === listItem.label ? !listItem.isOpen : false,
    }));
  }

  toggleLangDropdown(): void {
    this.isLanguagesOpen = !this.isLanguagesOpen;
  }

  changeLanguage(language: LanguageView): void {
    this.selectedLanguage = language;
    this.languageService.use(language);
    this.isLanguagesOpen = false;
  }

  setNextLanguage(): void {
    const selectedLanguageIndex = this.languages.findIndex((lang) => lang.name === this.selectedLanguage.name) ?? 0;
    const nextLanguageIndex = selectedLanguageIndex === this.languages.length - 1 ? 0 : selectedLanguageIndex + 1;
    this.selectedLanguage = this.languages[nextLanguageIndex];
    this.languageService.use(this.selectedLanguage);
  }

  toggleSearch(event: MouseEvent, isExpanded: boolean): void {
    if (!(event?.target as HTMLElement)?.classList?.contains('search-close')) {
      this.isSearchExpanded = isExpanded;
      if (!isExpanded) this.searchText = '';
      return;
    }
    this.searchText = '';
    this.isSearchExpanded = false;
  }

  search(): void {}

  openProNoteDialog(): void {}

  toggleMenuProNote(): void {
    this.menuProNoteVisible = !this.menuProNoteVisible;
  }
}
