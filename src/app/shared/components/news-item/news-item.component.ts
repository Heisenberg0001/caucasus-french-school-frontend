import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

const PLACEHOLDER_IMG_URL = 'assets/images/placeholder-img.png';

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.scss'],
})
export class NewsItemComponent {
  @Input() imgSrc: string = PLACEHOLDER_IMG_URL;
  @Input() publicationDate: string = '';
  @Input() url: string = '';

  constructor(private router: Router) {}

  showPlaceholderImg() {
    this.imgSrc = PLACEHOLDER_IMG_URL;
  }

  openNewsArticle() {
    this.router.navigateByUrl(this.url);
  }
}
