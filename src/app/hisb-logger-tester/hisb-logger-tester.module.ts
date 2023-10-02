import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoggerTesterComponent } from './components/logger-tester/logger-tester.component';
import { NgxHisbLoggerModule } from 'ngx-hisb-logger';
import {MatCardModule} from "@angular/material/card";

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
    MatCardModule,
  ]
})
export class HisbLoggerTesterModule { }
