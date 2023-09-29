import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgxHisbLoggerModule} from "ngx-hisb-logger";
import {NgxFhirValidatorModule} from "ngx-fhir-validator";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxHisbLoggerModule,
    NgxFhirValidatorModule.forRoot("https://dev.heat.icl.gtri.org/fhir-validator-service/fhir"),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
