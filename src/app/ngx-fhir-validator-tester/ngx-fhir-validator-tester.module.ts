import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleValidatorComponent } from './components/simple-validator/simple-validator.component';
import {NgxHisbLoggerModule} from "ngx-hisb-logger";

@NgModule({
  declarations: [
    SimpleValidatorComponent
  ],
  exports: [
    SimpleValidatorComponent
  ],
  imports: [
    CommonModule,
    NgxHisbLoggerModule
  ]
})
export class NgxFhirValidatorTesterModule { }
