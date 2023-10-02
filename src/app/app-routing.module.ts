import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoggerTesterComponent} from "./hisb-logger-tester/components/logger-tester/logger-tester.component";
import {LandingPageComponent} from "./components/landing-page/landing-page.component";
import {
  FhirValidatorTesterComponent
} from "./ngx-fhir-validator-tester/components/fhir-validator-tester/fhir-validator-tester.component";

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
