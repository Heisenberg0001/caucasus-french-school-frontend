import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-preschool',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './preschool.component.html',
  styleUrls: ['./preschool.component.scss']
})
export class PreschoolComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
