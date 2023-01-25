import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[error-msg]'
})
export class ErrorMsgDirective implements OnInit, OnChanges {

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

  private _setStyle(): void {
    this._htmlElement.nativeElement.style.color = this.color;
    this._htmlElement.nativeElement.classList.add('form-text');
  }

  private _setMessage(): void {
    this._htmlElement.nativeElement.innerText = this.message;
  }

}
