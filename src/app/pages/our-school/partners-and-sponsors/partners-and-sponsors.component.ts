import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-partners-and-sponsors',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './partners-and-sponsors.component.html',
  styleUrls: ['./partners-and-sponsors.component.scss']
})
export class PartnersAndSponsorsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
