import { NgModule } from '@angular/core';
import { DialogTesterComponent } from './components/dialog-tester/dialog-tester.component';
import {NgxHisbCommonUiModule} from "ngx-hisb-common-ui";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {CommonModule} from "@angular/common";
import {MatDialogModule} from "@angular/material/dialog";
import { CommonErrorTesterComponent } from './components/common-error-tester/common-error-tester.component';
import {CommonErrorComponent, HeaderComponent, NavMenuComponent} from "ngx-hisb-common-ui";
import {NavMenuTesterComponent} from "./components/nav-menu-tester/nav-menu-tester.component";

@NgModule({
  declarations: [
    DialogTesterComponent,
    CommonErrorTesterComponent,
    NavMenuTesterComponent
  ],
  exports:[
    DialogTesterComponent,
    CommonErrorTesterComponent,
    NavMenuTesterComponent
  ],
  imports: [
    CommonModule,
    NgxHisbCommonUiModule,
    CommonErrorComponent,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    HeaderComponent, // Confirmed
    NavMenuComponent, // Confirmed
  ],
})
export class NgxHisbCommonUiTesterModule { }
