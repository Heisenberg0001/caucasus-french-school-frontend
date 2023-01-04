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
        link: '/about-us',
      },
      {
        label: 'menu.FACILITIES',
        link: '/facilities',
      },
      {
        label: 'menu.ADMINISTRATION',
        link: '/administration',
      },
      {
        label: 'menu.JOIN_OUR_TEAM',
        link: '/join-our-team',
      },
      {
        label: 'menu.PARTNERS_SPONSORS',
        link: '/partners-and-sponsors',
      },
      {
        label: 'menu.CONTACT_US',
        link: '/contact',
      },
    ],
  },
  {
    label: 'menu.LEARNING',
    isOpen: false,
    children: [
      {
        label: 'menu.PRESCHOOL',
        link: '/preschool',
      },
      {
        label: 'menu.PRIMARY',
        link: '/primary',
      },
      {
        label: 'menu.MIDDLE_SCHOOL',
        link: '/middle-school',
      },
      {
        label: 'menu.HIGH_SCHOOL',
        link: '/high-school',
      },
      {
        label: 'menu.EXTRACURRICULAR_ACTIVITIES',
        link: '/extracurricular-activities',
      },
      {
        label: 'menu.SCHOOL_AND_UNIVERSITY_GUIDANCE',
        link: '/school-and-university-guidance',
      },
    ],
  },
  {
    label: 'menu.SCHOOL_LIFE',
    isOpen: false,
    children: [
      {
        label: 'menu.PRACTICAL_INFO',
        link: '/practical-information',
      },
      {
        label: 'menu.SCHOOL_CALENDAR',
        link: '/calendar',
      },
      {
        label: 'menu.NEWS_AND_ARTICLES',
        link: '/news',
      },
      {
        label: 'menu.LIBRARY',
        link: '/library',
      },
      {
        label: 'menu.CAFETERIA',
        link: '/cafeteria',
      },
    ],
  },
  {
    label: 'menu.COMMUNITY',
    isOpen: false,
    children: [
      {
        label: 'menu.PARENTS_ASSOCIATION',
        link: '/parents-association',
      },
      {
        label: 'menu.EFC_ALUMNI',
        link: '/alumni',
      },
    ],
  },
  {
    label: 'menu.ADMISSION',
    isOpen: false,
    children: [
      {
        label: 'menu.WHY_CHOOSE_THE_FRENCH_SCHOOL',
        link: '/why-efc',
      },
      {
        label: 'menu.ENROLLMENT',
        link: '/enrollment',
      },
    ],
  },
];
