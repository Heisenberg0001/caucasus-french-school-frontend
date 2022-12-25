import { Directive, ElementRef, Input, OnDestroy, OnInit } from '@angular/core';
import { ScrollManagerService } from '@shared/utils/directives/scroll-directives/scroll-manager.service';

@Directive({
  selector: '[scrollSection]',
})
export class ScrollSectionDirective implements OnInit, OnDestroy {
  @Input('scrollSection') id!: string | number;

  constructor(
    private host: ElementRef<HTMLElement>,
    private manager: ScrollManagerService
  ) {}

  ngOnInit() {
    this.manager.register(this);
  }

  ngOnDestroy() {
    this.manager.remove(this);
  }

  scroll() {
    this.host.nativeElement.classList.add('scroll-offset-top');
    this.host.nativeElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
}
