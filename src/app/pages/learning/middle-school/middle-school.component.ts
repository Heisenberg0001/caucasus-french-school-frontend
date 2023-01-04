import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-middle-school',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './middle-school.component.html',
  styleUrls: ['./middle-school.component.scss']
})
export class MiddleSchoolComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
