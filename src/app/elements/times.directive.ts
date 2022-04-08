import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appTimes]',
})
export class TimesDirective {
  constructor(
    private viewContainder: ViewContainerRef,
    private template: TemplateRef<any>
  ) {}

  @Input('appTimes') set render(times: number) {
    this.viewContainder.clear();

    for (let i = 0; i < times; i++) {
      this.viewContainder.createEmbeddedView(this.template, {});
    }
  }
}
