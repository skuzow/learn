import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[error-msg]'
})
export class ErrorMsgDirective implements OnInit {

  private _htmlElement: ElementRef<HTMLElement>;
  private _color: string = 'red';
  private _message: string = 'This field is required';

  @Input() set color(color: string) {
    this._color = color;
    this._setColor();
  }

  @Input() set message(message: string) {
    this._message = message;
    this._setMessage();
  }

  @Input() set valid(value: boolean) {
    if (value) this._htmlElement.nativeElement.classList.add('hidden');
    else this._htmlElement.nativeElement.classList.remove('hidden');
  }

  constructor(private el: ElementRef<HTMLElement>) {
    this._htmlElement = el;
  }

  ngOnInit(): void {
    this._setStyle();
    this._setColor();
    this._setMessage();
  }

  /* not best way to changes detection
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['message']) {
      const message = changes['message'].currentValue;
      this._htmlElement.nativeElement.innerText = message;
    }
    if (changes['color']) {
      const color = changes['color'].currentValue;
      this._htmlElement.nativeElement.style.color = color;
    }
  }
  */

  private _setStyle(): void {
    this._htmlElement.nativeElement.classList.add('form-text');
  }

  private _setColor(): void {
    this._htmlElement.nativeElement.style.color = this._color;
  }

  private _setMessage(): void {
    this._htmlElement.nativeElement.innerText = this._message;
  }

}
