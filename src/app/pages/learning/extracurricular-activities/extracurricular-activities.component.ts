import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-extracurricular-activities',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './extracurricular-activities.component.html',
  styleUrls: ['./extracurricular-activities.component.scss']
})
export class ExtracurricularActivitiesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
