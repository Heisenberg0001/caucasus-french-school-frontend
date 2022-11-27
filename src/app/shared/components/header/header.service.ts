import { Injectable } from '@angular/core';
import { LanguageView, MenuItem } from './header.models';

@Injectable()
export class HeaderService {
  private _menuItems = MENU_ITEMS;
  constructor() {}

  get languages(): LanguageView[] {
    return LANGUAGES;
  }

  get menuItems(): MenuItem[] {
    return this._menuItems;
  }
  set menuItems(value: MenuItem[]) {
    this._menuItems = value;
  }
}

const LANGUAGES: LanguageView[] = [
  { name: 'ENG', flagURL: 'assets/images/UK-flag.svg', key: 'en', locale: 'en-US' },
  { name: 'GEO', flagURL: 'assets/images/GE-flag.svg', key: 'ka', locale: 'ka-ge' },
  { name: 'FR', flagURL: 'assets/images/FR-flag.svg', key: 'fr', locale: 'fr-fr' },
];

// TODO: add links
const MENU_ITEMS: MenuItem[] = [
  {
    label: 'menu.OUR_SCHOOL',
    isOpen: false,
    children: [
      {
        label: 'menu.ABOUT_US',
        link: '',
      },
      {
        label: 'menu.FACILITIES',
        link: '',
      },
      {
        label: 'menu.ADMINISTRATION',
        link: '',
      },
      {
        label: 'menu.JOIN_OUR_TEAM',
        link: '',
      },
      {
        label: 'menu.PARTNERS_SPONSORS',
        link: '',
      },
      {
        label: 'menu.CONTACT_US',
        link: '',
      },
    ],
  },
  {
    label: 'menu.LEARNING',
    isOpen: false,
    children: [
      {
        label: 'menu.PRESCHOOL',
        link: '',
      },
      {
        label: 'menu.PRIMARY',
        link: '',
      },
      {
        label: 'menu.MIDDLE_SCHOOL',
        link: '',
      },
      {
        label: 'menu.HIGH_SCHOOL',
        link: '',
      },
      {
        label: 'menu.EXTRACURRICULAR_ACTIVITIES',
        link: '',
      },
      {
        label: 'menu.SCHOOL_AND_UNIVERSITY_GUIDANCE',
        link: '',
      },
    ],
  },
  {
    label: 'menu.SCHOOL_LIFE',
    isOpen: false,
    children: [
      {
        label: 'menu.PRACTICAL_INFO',
        link: '',
      },
      {
        label: 'menu.SCHOOL_CALENDAR',
        link: '',
      },
      {
        label: 'menu.NEWS_AND_ARTICLES',
        link: '',
      },
      {
        label: 'menu.LIBRARY',
        link: '',
      },
      {
        label: 'menu.CAFETERIA',
        link: '',
      },
    ],
  },
  {
    label: 'menu.COMMUNITY',
    isOpen: false,
    children: [
      {
        label: 'menu.PARENTS_ASSOCIATION',
        link: '',
      },
      {
        label: 'menu.EFC_ALUMNI',
        link: '',
      },
    ],
  },
  {
    label: 'menu.ADMISSION',
    isOpen: false,
    children: [
      {
        label: 'menu.WHY_CHOOSE_THE_FRENCH_SCHOOL',
        link: '',
      },
      {
        label: 'menu.ENROLLMENT',
        link: '',
      },
    ],
  },
];
