import {ModuleWithProviders, NgModule} from '@angular/core';
import { NgxFhirValidatorComponent } from './components/ngx-fhir-validator.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {CommonModule} from "@angular/common";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatSortModule} from "@angular/material/sort";
import {MatTableModule} from "@angular/material/table";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatCardModule} from "@angular/material/card";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatButtonModule} from "@angular/material/button";
import {MatSelectModule} from "@angular/material/select";
import {MatIconModule} from "@angular/material/icon";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatRadioModule} from "@angular/material/radio";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatChipsModule} from "@angular/material/chips";
import {BrowserModule} from "@angular/platform-browser";
import {MatDividerModule} from "@angular/material/divider";
import { provideHttpClient, withInterceptorsFromDi } from "@angular/common/http";
import {ValidatorConstants} from "./providers/validator-constants";



@NgModule({ declarations: [
        NgxFhirValidatorComponent
    ],
    exports: [
        NgxFhirValidatorComponent
    ], imports: [CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        ReactiveFormsModule,
        MatIconModule,
        MatSidenavModule,
        MatToolbarModule,
        MatTableModule,
        MatPaginatorModule,
        MatProgressSpinnerModule,
        MatSortModule,
        MatRadioModule,
        FormsModule,
        MatCardModule,
        MatSnackBarModule,
        MatSelectModule,
        MatButtonToggleModule,
        MatChipsModule,
        MatCheckboxModule,
        MatTooltipModule,
        MatDividerModule], providers: [
        ValidatorConstants,
        provideHttpClient(withInterceptorsFromDi())
    ] })
export class NgxFhirValidatorModule {

  public static forRoot(serverBaseUrl: string): ModuleWithProviders<NgxFhirValidatorModule>{
    return {
      ngModule: NgxFhirValidatorModule,
      providers: [
        {
          provide: 'serverBaseUrl',
          useValue: serverBaseUrl
        }
      ]
    }
  }
}
