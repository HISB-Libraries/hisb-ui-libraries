import { Component } from '@angular/core';
import {ValidatorInput} from "ngx-fhir-validator";

@Component({
  selector: 'app-fhir-validator-tester',
  templateUrl: './fhir-validator-tester.component.html',
  styleUrls: ['./fhir-validator-tester.component.scss']
})
export class FhirValidatorTesterComponent {
  validationTextFormat: ValidatorInput = {format: 'xml and json', accepts: 'text/*,.xml,.json'};

  onExportValidationResults(event: any) {
    console.log(event);
  }
}
