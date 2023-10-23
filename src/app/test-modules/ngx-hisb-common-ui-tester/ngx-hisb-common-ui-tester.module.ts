import { NgModule } from '@angular/core';
import { DialogTesterComponent } from './components/dialog-tester/dialog-tester.component';
import {NgxHisbCommonUiModule} from "ngx-hisb-common-ui";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {CommonModule} from "@angular/common";
import {MatDialogModule} from "@angular/material/dialog";
import { CommonErrorTesterComponent } from './components/common-error-tester/common-error-tester.component';
import {CommonErrorComponent} from "ngx-hisb-common-ui";

@NgModule({
  declarations: [
    DialogTesterComponent,
    CommonErrorTesterComponent
  ],
  exports:[
    DialogTesterComponent,
    CommonErrorTesterComponent
  ],
  imports: [
    CommonModule,
    NgxHisbCommonUiModule,
    CommonErrorComponent,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
  ],
})
export class NgxHisbCommonUiTesterModule { }
