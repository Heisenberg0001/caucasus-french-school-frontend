import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-upcoming-event',
  templateUrl: './upcoming-event.component.html',
  styleUrls: ['./upcoming-event.component.scss'],
})
export class UpcomingEventComponent implements OnInit {
  @Input() date: string = '';
  @Input() timeInterval: { from: string; to: string } = { from: '', to: '' };

  constructor() {}

  ngOnInit(): void {}
}
