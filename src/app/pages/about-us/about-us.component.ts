import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppSharedModule } from '@shared/shared.module';
import { SubSection } from '@shared/components';

@Component({
  standalone: true,
  selector: 'app-about-us',
  imports: [CommonModule, AppSharedModule],
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
})
export class AboutUsComponent implements OnInit {
  subSections: SubSection[] = [
    { title: 'PRINCIPAL’S ADDRESS', id: 't1' },
    { title: 'HISTORY AND MISSION ', id: 't2' },
    { title: 'TEACHING METHOD', id: 't3' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
