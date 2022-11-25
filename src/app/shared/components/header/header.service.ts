import { Injectable } from '@angular/core';
import { Language, MenuItem } from './header.models';

@Injectable()
export class HeaderService {
  private _menuItems = MENU_ITEMS;
  constructor() {}

  get languages(): Language[] {
    return LANGUAGES;
  }

  get menuItems(): MenuItem[] {
    return this._menuItems;
  }
  set menuItems(value: MenuItem[]) {
    this._menuItems = value;
  }
}

const LANGUAGES: Language[] = [
  { label: 'English', flagURL: 'assets/images/UK-flag.svg', altText: 'UK-flag' },
  { label: 'Georgian', flagURL: 'assets/images/GE-flag.svg', altText: 'GEO-flag' },
  { label: 'French', flagURL: 'assets/images/FR-flag.svg', altText: 'FR-flag' },
];

// TODO: add links
const MENU_ITEMS: MenuItem[] = [
  {
    label: 'OUR SCHOOL',
    isOpen: false,
    children: [
      {
        label: 'About Us',
        link: '',
      },
      {
        label: 'Facilities',
        link: '',
      },
      {
        label: 'Administration',
        link: '',
      },
      {
        label: 'Join Our Team',
        link: '',
      },
      {
        label: 'Partners/Sponsors',
        link: '',
      },
      {
        label: 'Contact Us',
        link: '',
      },
    ],
  },
  {
    label: 'LEARNING',
    isOpen: false,
    children: [
      {
        label: 'Preschool',
        link: '',
      },
      {
        label: 'Primary',
        link: '',
      },
      {
        label: 'Middle School',
        link: '',
      },
      {
        label: 'High School',
        link: '',
      },
      {
        label: 'Extracurricular Activities',
        link: '',
      },
      {
        label: 'School & University Guidance',
        link: '',
      },
    ],
  },
  {
    label: 'SCHOOL LIFE',
    isOpen: false,
    children: [
      {
        label: 'Practical Information',
        link: '',
      },
      {
        label: 'School Calendar',
        link: '',
      },
      {
        label: 'News and Articles',
        link: '',
      },
      {
        label: 'Library',
        link: '',
      },
      {
        label: 'Cafeteria',
        link: '',
      },
    ],
  },
  {
    label: 'COMMUNITY',
    isOpen: false,
    children: [
      {
        label: 'Parents Association',
        link: '',
      },
      {
        label: 'EFC Alumni',
        link: '',
      },
    ],
  },
  {
    label: 'ADMISSION',
    isOpen: false,
    children: [
      {
        label: 'Why Choose The French School?',
        link: '',
      },
      {
        label: 'Enrollment',
        link: '',
      },
    ],
  },
];
