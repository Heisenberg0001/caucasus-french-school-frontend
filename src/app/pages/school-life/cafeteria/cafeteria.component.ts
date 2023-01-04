import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cafeteria',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cafeteria.component.html',
  styleUrls: ['./cafeteria.component.scss']
})
export class CafeteriaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
