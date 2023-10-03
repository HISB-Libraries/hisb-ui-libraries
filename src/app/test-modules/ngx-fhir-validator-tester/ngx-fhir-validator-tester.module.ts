import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FhirValidatorTesterComponent } from './components/fhir-validator-tester/fhir-validator-tester.component';
import {MatCardModule} from "@angular/material/card";
import {NgxFhirValidatorModule} from "../../../../projects/ngx-fhir-validator/src/lib/ngx-fhir-validator.module";

@NgModule({
  declarations: [
    FhirValidatorTesterComponent
  ],
  exports: [
    FhirValidatorTesterComponent
  ],
  imports: [
    CommonModule,
    NgxFhirValidatorModule.forRoot("https://dev.heat.icl.gtri.org/fhir-validator-service/fhir"),
    MatCardModule
  ]
})
export class NgxFhirValidatorTesterModule { }
