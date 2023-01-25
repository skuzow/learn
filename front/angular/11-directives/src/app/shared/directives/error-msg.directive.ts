import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[error-msg]'
})
export class ErrorMsgDirective implements OnInit {

  private _htmlElement: ElementRef<HTMLElement>;

  @Input() color: string = 'red';
  @Input() message: string = 'This field is required';

  constructor(private el: ElementRef<HTMLElement>) {
    this._htmlElement = el;
  }

  ngOnInit(): void {
    this._setStyle();
    this._setMessage();
  }

  private _setStyle(): void {
    this._htmlElement.nativeElement.style.color = this.color;
    this._htmlElement.nativeElement.classList.add('form-text');
  }

  private _setMessage(): void {
    this._htmlElement.nativeElement.innerText = this.message;
  }

}
