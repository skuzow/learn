import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[customIf]'
})
export class CustomIfDirective {

  @Input() set customIf(condition: boolean) {
    if (condition) this.vc.createEmbeddedView(this.tr);
    else this.vc.clear();
  }

  constructor(
    private tr: TemplateRef<HTMLElement>,
    private vc: ViewContainerRef
  ) { }

}
