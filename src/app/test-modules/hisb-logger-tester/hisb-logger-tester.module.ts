import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoggerTesterComponent } from './components/logger-tester/logger-tester.component';
import { NgxHisbLoggerModule } from 'ngx-hisb-logger';
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {LoggerService} from "../../../../projects/ngx-hisb-logger/src/lib/services/logger.service";

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
  ],
  providers: [
    LoggerService
  ]
})
export class HisbLoggerTesterModule { }
