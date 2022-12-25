import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-content-wrapper',
  templateUrl: './content-wrapper.component.html',
  styleUrls: ['./content-wrapper.component.scss'],
})
export class ContentWrapperComponent {
  @Input() bgImgUrl: string = '';
  @Input() subSections: SubSection[] = [];
  @Input() includeSummary: boolean = false;
}

export interface SubSection {
  title: string;
  id: string;
}
