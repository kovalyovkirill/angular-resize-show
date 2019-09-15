import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TestComponent } from './test.component';
import { IfViewportSizeModule } from "./if-viewport-size/if-viewport-size.module";

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    IfViewportSizeModule.forRoot({ medium: 700, large: 1200 })
  ],
  declarations: [ AppComponent, HelloComponent, TestComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
