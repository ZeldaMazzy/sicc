import { Directive, ElementRef, EventEmitter, HostListener, Input, Output, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective  {
  @Input() isOpen: boolean = false;
  @Output() clickOutside = new EventEmitter<MouseEvent>();
  constructor(private _renderer: Renderer2, private _elem: ElementRef) {}

  ngOnChanges () {
    const elem = this._elem.nativeElement.querySelector(".dropdown-menu");
      if (this.isOpen) {
        this._renderer.addClass(elem, "show");
      } else {
        this._renderer.removeClass(elem, "show");
      }
  }

  @HostListener("document:click", ["$event", "$event.target"])
  public onClick(event: MouseEvent, targetElement: HTMLElement): void {
    if (!targetElement) {
      return;
    }
    const clickInside = this._elem.nativeElement.contains(targetElement);
    if (!clickInside && this.isOpen) {
      this.clickOutside.emit(event);
    }
  }

}
