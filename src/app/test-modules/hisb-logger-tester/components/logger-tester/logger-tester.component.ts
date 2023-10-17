import { Component } from '@angular/core';
import {LogLine} from "ngx-hisb-logger";

@Component({
  selector: 'app-logger-tester',
  templateUrl: './logger-tester.component.html',
  styleUrls: ['./logger-tester.component.scss']
})
export class LoggerTesterComponent {

  loggerData: LogLine[];
}
