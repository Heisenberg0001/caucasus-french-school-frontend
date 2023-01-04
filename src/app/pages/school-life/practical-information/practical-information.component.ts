import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-practical-information',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './practical-information.component.html',
  styleUrls: ['./practical-information.component.scss']
})
export class PracticalInformationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
