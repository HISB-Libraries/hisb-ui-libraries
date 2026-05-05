import { importProvidersFrom } from "@angular/core";

import { BrowserModule, bootstrapApplication } from "@angular/platform-browser";
import { AppRoutingModule } from "./app/app-routing.module";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { AppComponent } from "./app/app.component";


bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(BrowserModule, AppRoutingModule, MatCardModule, MatButtonModule, MatToolbarModule, MatIconModule),
        {
            provide: 'serverBaseUrl',
            useValue: 'https://dev.heat.icl.gtri.org/fhir-validator-service/fhir'
        }
    ]
})
  .catch(err => console.error(err));
