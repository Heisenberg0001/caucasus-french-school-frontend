import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-high-school',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './high-school.component.html',
  styleUrls: ['./high-school.component.scss']
})
export class HighSchoolComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
