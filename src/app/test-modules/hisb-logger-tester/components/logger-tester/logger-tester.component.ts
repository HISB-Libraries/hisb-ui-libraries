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

  ngOnInit(): void {
    this.loggerService.logStream$.subscribe(value => this.loggerData = value);
  }

  onClear() {
    this.loggerService.clear();
  }

  onDebug() {
    this.loggerService.debug('test debug msg', 'test debug src');
  }

  onInfo() {
    this.loggerService.info('test info msg', 'test info src');
  }

  onWarn() {
    this.loggerService.warn('test warn msg', 'test warn src');
  }

  onError() {
    this.loggerService.error('test error msg', 'test error src')
  }

}
