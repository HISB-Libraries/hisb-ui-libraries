import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {NgxFhirValidatorTesterModule} from "./test-modules/ngx-fhir-validator-tester/ngx-fhir-validator-tester.module";
import {HisbLoggerTesterModule} from "./test-modules/hisb-logger-tester/hisb-logger-tester.module";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import { HeaderComponent } from './components/header/header.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import {CommonUiTesterModule} from "./test-modules/common-ui-tester/common-ui-tester.module";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LandingPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    NgxFhirValidatorTesterModule,
    HisbLoggerTesterModule,
    MatToolbarModule,
    MatIconModule,
    CommonUiTesterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
