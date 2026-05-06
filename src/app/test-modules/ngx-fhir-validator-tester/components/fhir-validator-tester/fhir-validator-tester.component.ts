import {Component, OnInit} from '@angular/core';
import { ValidationResults, ValidatorInput, NgxFhirValidatorComponent } from "ngx-fhir-validator";
import { FormBuilder, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { MatCard, MatCardContent, MatCardHeader, MatCardTitle } from '@angular/material/card';
import { MatFormField, MatLabel, MatInput } from '@angular/material/input';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatRadioGroup, MatRadioButton } from '@angular/material/radio';


@Component({
    selector: 'app-fhir-validator-tester',
    templateUrl: './fhir-validator-tester.component.html',
    styleUrls: ['./fhir-validator-tester.component.scss'],
    imports: [MatCard, MatCardContent, NgxFhirValidatorComponent, MatCardHeader, MatCardTitle, ReactiveFormsModule, MatFormField, MatLabel, MatInput, MatCheckbox, MatRadioGroup, MatRadioButton]
})

export class FhirValidatorTesterComponent implements  OnInit {
  validationTextFormat: ValidatorInput = {format: 'xml and json', accepts: 'text/*,.xml,.json'};
  form: FormGroup;
  buttonAlignment = ['right' , 'left']

  constructor(private formBuilder: FormBuilder) {
  }

  submit() {

  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      validatorTitle: "FHIR Validator",
      validationResultsExpanded: true,
      resultDetailsExpandBtnShown: true,
      formatResourceBtnShown: true,
      clearValidatorBtnShown: true,
      submitBtnShown: true,
      exportResultsButtonShown: true,
      maxFileSize: 250000,
      submitBtnAlignment: this.buttonAlignment[0],
      submitBtnTitle: "Submit",
      cancelValidationBtnShown: true,
      buttonTxtColor:'white',
      buttonBackgroundColor: '#4858B8',
      exportValidationResultsBtnName: 'Export Results (.zip)'
    });
  }

  onApiError(event: any) {
    console.log("onApiError event triggered");
    console.log(event);
  }

  onResourceContentChanged(event: any) {
    console.log("onResourceContentChanged event triggered");
    console.log(event);
  }

  onValidation(event: ValidationResults) {
    console.log("onValidation event triggered");
    console.log(event);
  }

  onExportValidationResults(event: any) {
    console.log("onExportValidationResults event triggered");
    console.log(event);
  }

}
