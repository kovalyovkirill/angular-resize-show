import {ModuleWithProviders, NgModule, Optional, SkipSelf} from '@angular/core';
import { CommonModule } from '@angular/common';
import { IfViewportSizeDirective } from "./if-viewport-size.directive";
import {IfViewportSizeConfig, IfViewportSizeService} from "./if-viewport-size.service";

@NgModule({
  declarations: [IfViewportSizeDirective],
  providers: [IfViewportSizeService],
  exports: [IfViewportSizeDirective],
  imports: [
    CommonModule
  ]
})
export class IfViewportSizeModule {
  constructor (@Optional() @SkipSelf() parentModule: IfViewportSizeModule) {
    if (parentModule) {
      throw new Error(
        'GreetingModule is already loaded. Import it in the AppModule only');
    }
  }

  static forRoot(config: IfViewportSizeConfig): ModuleWithProviders {
    return {
      ngModule: IfViewportSizeModule,
      providers: [
        {provide: IfViewportSizeConfig, useValue: config }
      ]
    };
  }
}
