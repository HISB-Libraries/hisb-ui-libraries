import { NgModule } from '@angular/core';
import { NgxConsoleComponent } from './components/console/ngx-console.component';
import {LoggerService} from "./services/logger.service";

@NgModule({
  imports: [
    NgxConsoleComponent
  ],
  exports: [
    NgxConsoleComponent,
  ],
  providers: [
   LoggerService
  ]
})
export class NgxHisbLoggerModule { }
