import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgxHisbLoggerModule} from "../../projects/ngx-hisb-logger/src/lib/ngx-hisb-logger.module";
import {NgxFhirValidatorModule} from "../../projects/ngx-fhir-validator/src/lib/ngx-fhir-validator.module";


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
