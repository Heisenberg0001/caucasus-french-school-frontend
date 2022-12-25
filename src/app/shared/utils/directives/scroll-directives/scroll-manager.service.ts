import { Injectable } from '@angular/core';
import { ScrollSectionDirective } from '@shared/utils';

@Injectable({
  providedIn: 'root',
})
export class ScrollManagerService {
  sections = new Map<string | number, ScrollSectionDirective>();

  constructor() {}

  scroll(id: string | number) {
    this.sections.get(id)?.scroll();
  }

  register(section: ScrollSectionDirective) {
    this.sections.set(section.id, section);
  }

  remove(section: ScrollSectionDirective) {
    this.sections.delete(section.id);
  }
}
