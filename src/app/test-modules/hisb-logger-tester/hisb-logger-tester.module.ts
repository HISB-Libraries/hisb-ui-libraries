import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoggerTesterComponent } from './components/logger-tester/logger-tester.component';
import { NgxHisbLoggerModule } from 'ngx-hisb-logger';
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {MatSelectModule} from "@angular/material/select";

@NgModule({
  declarations: [
    LoggerTesterComponent
  ],
  exports: [
    LoggerTesterComponent
  ],
  imports: [
    CommonModule,
    NgxHisbLoggerModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSelectModule,
  ],
})
export class HisbLoggerTesterModule { }
