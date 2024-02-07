import {Component, OnInit} from '@angular/core';
import {ValidationResults, ValidatorInput, ImplementationGuide} from "ngx-fhir-validator";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-fhir-validator-tester',
  templateUrl: './fhir-validator-tester.component.html',
  styleUrls: ['./fhir-validator-tester.component.scss']
})

export class FhirValidatorTesterComponent implements  OnInit {
  validationTextFormat: ValidatorInput = {format: 'xml and json', accepts: 'text/*,.xml,.json'};
  form: FormGroup;
  buttonAlignment = ['right' , 'left']
  igList: ImplementationGuide[] = [
    {
      "name": "mdi#1.1.0",
      "valueString": "hl7.fhir.us.mdi#1.1.0",
      "display": "MDI FHIR IG - 1.1.0"
    },
    {
      "name": "mdi#current",
      "valueString": "hl7.fhir.us.mdi#current",
      "display": "MDI FHIR IG - Current"
    },
    {
      "name": "vrdr#2.2.0",
      "valueString": "hl7.fhir.us.vrdr#2.2.0",
      "display": "VRDR FHIR IG - 2.2.0"
    }
  ];

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
