import { Directive, ElementRef, EventEmitter, Input, OnChanges, Output, Renderer2 } from '@angular/core';

@Directive({
  selector: '[dropdown]'
})

export class DropdownDirective implements OnChanges {
  @Input() open: boolean = false;
  @Output() clickOutside = new EventEmitter<MouseEvent>();
  constructor(private _renderer: Renderer2, private _elem: ElementRef) { }

  ngOnChanges() {
    const elem = this._elem.nativeElement.querySelector(".dropdown-menu");

    if (this.open) {
      this._renderer.addClass(elem, "show");
    }
    else {
      this._renderer.removeClass(elem, "show");
    }
  }
}
