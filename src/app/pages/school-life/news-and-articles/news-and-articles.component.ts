import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-news-and-articles',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './news-and-articles.component.html',
  styleUrls: ['./news-and-articles.component.scss']
})
export class NewsAndArticlesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
