import { NgModule } from '@angular/core';
import {RouterLink} from "@angular/router";
import {NgIf} from "@angular/common";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";


@NgModule({
  imports: [
    RouterLink,
    NgIf,
    BrowserAnimationsModule,
  ],
})
export class NgxHisbCommonUiModule { }
