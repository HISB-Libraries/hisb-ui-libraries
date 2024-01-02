import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FhirValidatorTesterComponent } from './components/fhir-validator-tester/fhir-validator-tester.component';
import {MatCardModule} from "@angular/material/card";
import {NgxFhirValidatorModule} from "ngx-fhir-validator";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatRadioModule} from "@angular/material/radio";

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
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatRadioModule,
  ]
})
export class NgxFhirValidatorTesterModule { }
