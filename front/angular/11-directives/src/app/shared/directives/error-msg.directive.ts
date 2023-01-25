import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[error-msg]'
})
export class ErrorMsgDirective implements OnInit {

  private _htmlElement: ElementRef<HTMLElement>;
  @Input() color: string = 'red';

  constructor(private el: ElementRef<HTMLElement>) {
    this._htmlElement = el;
  }

  ngOnInit(): void {
    this._setColor();
  }

  private _setColor(): void {
    this._htmlElement.nativeElement.style.color = this.color;
  }

}
