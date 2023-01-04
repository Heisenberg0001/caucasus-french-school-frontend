import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-parents-association',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './parents-association.component.html',
  styleUrls: ['./parents-association.component.scss']
})
export class ParentsAssociationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
