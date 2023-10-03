import { NgModule } from '@angular/core';
import {MatIconModule} from "@angular/material/icon";
import {MatToolbarModule} from "@angular/material/toolbar";
import {RouterLink} from "@angular/router";
import {MatDividerModule} from "@angular/material/divider";
import {NgIf} from "@angular/common";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
  ],
    imports: [
        MatIconModule,
        MatToolbarModule,
        RouterLink,
        MatDividerModule,
        NgIf,
        BrowserAnimationsModule,
    ],
  exports: [

  ]
})
export class CommonUiModule { }
