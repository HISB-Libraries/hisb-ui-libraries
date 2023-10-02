import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {NgxFhirValidatorTesterModule} from "./ngx-fhir-validator-tester/ngx-fhir-validator-tester.module";
import {HisbLoggerTesterModule} from "./hisb-logger-tester/hisb-logger-tester.module";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    NgxFhirValidatorTesterModule,
    HisbLoggerTesterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
