import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogTesterComponent } from './components/dialog-tester/dialog-tester.component';
import {CommonUiModule} from "common-ui";
import {MatButtonModule} from "@angular/material/button";
import {MatDialogModule} from "@angular/material/dialog";



@NgModule({
  declarations: [
    DialogTesterComponent
  ],
  imports: [
    CommonModule,
    CommonUiModule,
    MatButtonModule,
    MatDialogModule
  ]
})
export class CommonUiTesterModule { }
