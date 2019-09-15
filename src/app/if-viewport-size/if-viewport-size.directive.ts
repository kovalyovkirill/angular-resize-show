import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { IfViewportSizeService } from "./if-viewport-size.service";

@Directive({
  selector: '[ifViewportSize]'
})
export class IfViewportSizeDirective {
  private hasView = false;
  private initScreenSize = '';
  private innerSize = '';

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    windowWidthService: IfViewportSizeService
  ) {
    windowWidthService.getWindowWidth().subscribe(this.checkShow);

    this.initScreenSize = windowWidthService.getScreenSize();
  }

  @Input() set ifViewportSize(screenSize: string) {
    this.innerSize = screenSize;
    this.checkShow(this.initScreenSize);
  }

  checkShow = (screenSize : string) => {
    const isShow = screenSize === this.innerSize;

    if (isShow && !this.hasView) {
      this.viewContainer.createEmbeddedView(this.templateRef);
      this.hasView = true;
    } else if (!isShow && this.hasView) {
      this.viewContainer.clear();
      this.hasView = false;
    }
  }
}
