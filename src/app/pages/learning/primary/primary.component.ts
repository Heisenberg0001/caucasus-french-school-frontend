import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-primary',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './primary.component.html',
  styleUrls: ['./primary.component.scss']
})
export class PrimaryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
