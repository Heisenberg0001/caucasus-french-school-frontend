import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-enrollment',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './enrollment.component.html',
  styleUrls: ['./enrollment.component.scss']
})
export class EnrollmentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
