import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoggerTesterComponent } from './components/logger-tester/logger-tester.component';
import { NgxHisbLoggerModule } from 'ngx-hisb-logger';

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
  ]
})
export class HisbLoggerTesterModule { }
