import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoggerTesterComponent} from "./test-modules/hisb-logger-tester/components/logger-tester/logger-tester.component";
import {LandingPageComponent} from "./components/landing-page/landing-page.component";
import {
  FhirValidatorTesterComponent
} from "./test-modules/ngx-fhir-validator-tester/components/fhir-validator-tester/fhir-validator-tester.component";
import {DialogTesterComponent} from "./test-modules/ngx-hisb-common-ui-tester/components/dialog-tester/dialog-tester.component";
import {
  CommonErrorTesterComponent
} from "./test-modules/ngx-hisb-common-ui-tester/components/common-error-tester/common-error-tester.component";

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
  },
  {
    path: 'hisb-logger',
    component: LoggerTesterComponent,
  },
  {
    path: 'fhir-validator',
    component: FhirValidatorTesterComponent,
  },
  {
    path: 'dialog',
    component: DialogTesterComponent,
  },
  {
    path: 'common-error',
    component: CommonErrorTesterComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
