import { Component, OnInit } from '@angular/core';
import { LanguageService } from '@core/services';

@Component({
  selector: 'app-home-news-and-articles',
  templateUrl: './home-news-and-articles.component.html',
  styleUrls: ['./home-news-and-articles.component.scss'],
})
export class HomeNewsAndArticlesComponent implements OnInit {
  news: News[] = [];
  upcomingEvents: UpcomingEvent[] = [];

  get currentLangIsGeorgian(): boolean {
    return this.languageService.currentLanguage.key === 'ka';
  }

  constructor(private languageService: LanguageService) {}

  ngOnInit(): void {
    this.news = this.getLatestThreeNews();
    this.upcomingEvents = this.getThreeUpcomingEvents();
  }

  private getLatestThreeNews(): News[] {
    // first sort by publication date, then take latest 3 news
    return NEWS.sort((a, b) => (new Date(a.publicationDate) < new Date(b.publicationDate) ? -1 : 1)).slice(0, 3);
  }

  private getThreeUpcomingEvents(): UpcomingEvent[] {
    // first sort by date, then take 3 events
    return UPCOMING_EVENTS.sort((a, b) => (new Date(a.date) > new Date(b.date) ? -1 : 1)).slice(0, 3);
  }
}

export interface News {
  title: string;
  content: string;
  publicationDate: string;
  description: string;
  summary: string;
  imgSrc: string;
  url: string;
}

export interface UpcomingEvent {
  date: string;
  timeInterval: {
    from: string;
    to: string;
  };
  description: string;
}

const NEWS = [
  {
    title: 'Rigrous IB Curriculum',
    publicationDate: '03-12-2022',
    content: 'Content: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid enim omnis recusandae.',
    description: 'LFS I online open house Thursday, June 22 at 4:00 p.m.',
    summary: 'Summary: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid enim omnis recusandae.',
    imgSrc: '',
    url: '',
  },
  {
    title: 'Rigrous IB Curriculum',
    publicationDate: '05-06-2021',
    content: 'Content: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid enim omnis recusandae.',
    description: 'LFS I online open house Thursday, June 22 at 4:00 p.m.',
    summary: 'Summary: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid enim omnis recusandae.',
    imgSrc: '',
    url: '',
  },
  {
    title: 'Rigrous IB Curriculum',
    publicationDate: '10-11-2017',
    content: 'Content: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid enim omnis recusandae.',
    description: 'Description: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid enim omnis recusandae.',
    summary: 'Summary: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid enim omnis recusandae.',
    imgSrc: '',
    url: '',
  },
];

const UPCOMING_EVENTS = [
  {
    date: '28 Jun',
    timeInterval: {
      from: '4 pm',
      to: '6 pm',
    },
    description: 'Description: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid enim omnis recusandae.',
  },
  {
    date: '28 Jun',
    timeInterval: {
      from: '4 pm',
      to: '6 pm',
    },
    description: 'Description: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid enim omnis recusandae.',
  },
  {
    date: '28 Jun',
    timeInterval: {
      from: '4 pm',
      to: '6 pm',
    },
    description: 'Description: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid enim omnis recusandae.',
  },
];
