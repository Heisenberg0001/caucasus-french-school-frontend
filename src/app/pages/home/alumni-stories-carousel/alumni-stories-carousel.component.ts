import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-alumni-stories-carousel',
  templateUrl: './alumni-stories-carousel.component.html',
  styleUrls: ['./alumni-stories-carousel.component.scss'],
})
export class AlumniStoriesCarouselComponent implements OnInit {
  stories: StudentStory[] = [];
  constructor() {}

  ngOnInit(): void {
    this.stories = STORIES;
  }
}

export interface StudentStory {
  student: string;
  story: string;
  imgSrc: string;
  relativePath?: string;
}

const STORIES: StudentStory[] = [
  {
    student: 'Zayn Lodje',
    story:
      'It gives me immense pleasure to share my professional journey with you. I am currently working in “Ericsson India Global Service Pvt. Ltd.”  As  Integration Engineer, Gurgaon, Haryana.',
    imgSrc: 'alumni_lodje.png',
    relativePath: '',
  },
  {
    student: 'Sara Sampora',
    story:
      'It gives me immense pleasure to share my professional journey with you. I am currently working in “Ericsson India Global Service Pvt. Ltd.”  As  Integration Engineer, Gurgaon, Haryana.',
    imgSrc: 'alumni_sampora.png',
    relativePath: '',
  },
  {
    student: 'Nino Labadze',
    story: ' I am currently working in “DAMAC PROPERTIES” as Property Consultant, Dubai, UAE, Middle East’s Biggest Private Luxury Developer.',
    imgSrc: 'alumni_labadze.png',
    relativePath: '',
  },
  {
    student: 'YAn junk',
    story:
      ' I am currently working in a UK based multinational company called. 1E Ltd, in London and earningpretty well. Prior to 1E, I have worked with companies like DunnHumby and Sapient.”  As  Integration Engineer, Gurgaon, Haryana.',
    imgSrc: 'alumni_junk.png',
    relativePath: '',
  },
];
