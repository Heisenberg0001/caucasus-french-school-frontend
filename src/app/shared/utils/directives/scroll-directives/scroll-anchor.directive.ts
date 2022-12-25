import { Directive, HostListener, Input } from '@angular/core';
import { ScrollManagerService } from '@shared/utils/directives/scroll-directives/scroll-manager.service';

@Directive({
  selector: '[scrollAnchor]',
})
export class ScrollAnchorDirective {
  @Input('scrollAnchor') id!: string | number;

  constructor(private manager: ScrollManagerService) {}

  @HostListener('click') scroll() {
    this.manager.scroll(this.id);
  }
}
