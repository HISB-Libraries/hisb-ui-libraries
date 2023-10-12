import { NgModule } from '@angular/core';
import { DialogTesterComponent } from './components/dialog-tester/dialog-tester.component';
import {NgxHisbCommonUiModule} from "ngx-hisb-common-ui";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {CommonModule} from "@angular/common";
import {MatDialogModule} from "@angular/material/dialog";

@NgModule({
  declarations: [
    DialogTesterComponent
  ],
  exports:[
    DialogTesterComponent
  ],
  imports: [
    CommonModule,
    NgxHisbCommonUiModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule
  ]
})
export class NgxHisbCommonUiTesterModule { }
