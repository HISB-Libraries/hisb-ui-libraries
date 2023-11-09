import { Component } from '@angular/core';
import {LogLine} from "ngx-hisb-logger";
import {LoggerService} from "../../../../../../projects/ngx-hisb-logger/src/lib/services/logger.service";

@Component({
  selector: 'app-logger-tester',
  templateUrl: './logger-tester.component.html',
  styleUrls: ['./logger-tester.component.scss']
})
export class LoggerTesterComponent {

  constructor(private loggerService : LoggerService) {}
  loggerData: LogLine[];


}
