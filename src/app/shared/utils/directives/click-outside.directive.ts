import { Directive, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[clickOutside]',
})
export class ClickOutsideDirective {
  constructor(private _elementRef: ElementRef) {}

  @Output() clickOutside = new EventEmitter();

  /*
  Using '$event.path' instead of '$event.target' to take into account the elements
  whose children are created dynamically as those elements does not have 'target' property
  */
  @HostListener('document:click', ['$event']) onClick(targetElement: MouseEvent): void {
    const elementRefIsInPath = targetElement?.composedPath()?.find((e: EventTarget) => e === this._elementRef.nativeElement);
    if (!elementRefIsInPath) {
      this.clickOutside.emit();
    }
  }
}
