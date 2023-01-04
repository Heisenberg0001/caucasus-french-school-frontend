import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-school-calendar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './school-calendar.component.html',
  styleUrls: ['./school-calendar.component.scss']
})
export class SchoolCalendarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
