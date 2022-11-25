import { Component, OnInit } from '@angular/core';
import { Language, MenuItem } from './header.models';
import { HeaderService } from './header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [HeaderService],
})
export class HeaderComponent implements OnInit {
  constructor(private headerService: HeaderService) {}

  searchText: string = '';
  isMenuOpen: boolean = false;
  isLanguagesOpen: boolean = false;
  isSearchExpanded: boolean = false;
  menuProNoteVisible: boolean = false;
  selectedLanguage!: Language;

  get menuItems(): MenuItem[] {
    return this.headerService.menuItems;
  }
  get languages(): Language[] {
    return this.headerService.languages;
  }

  ngOnInit(): void {
    this.selectedLanguage = this.languages[0];
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

  changeLanguage(lang: Language): void {
    this.selectedLanguage = lang;
    this.isLanguagesOpen = false;
  }

  setNextLanguage(): void {
    const selectedLanguageIndex = this.languages.findIndex((lang) => lang.label === this.selectedLanguage.label) ?? 0;
    const nextLanguageIndex = selectedLanguageIndex === this.languages.length - 1 ? 0 : selectedLanguageIndex + 1;
    this.selectedLanguage = this.languages[nextLanguageIndex];
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
