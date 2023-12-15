import {Component, OnInit} from '@angular/core';
import {LogLine, LoggerService} from "ngx-hisb-logger";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-logger-tester',
  templateUrl: './logger-tester.component.html',
  styleUrls: ['./logger-tester.component.scss']
})
export class LoggerTesterComponent implements OnInit{
  form: FormGroup | undefined;
  constructor(private loggerService : LoggerService, private formBuilder: FormBuilder) {}
  loggerData: LogLine[];
  loggingLevelList = ['info', 'debug', 'warn', 'error'];

  ngOnInit(): void {
    this.loggerService.logStream$.subscribe(value => {
      console.log(value);
      this.loggerData = value;
    });

    this.form = this.formBuilder.group({
      message: [null, [Validators.required]],
      logLevel: [this.loggingLevelList[0]],
      updateOn: 'submit'
    });
  }

  onClear() {
    this.loggerService.clear();
  }

  onDebug() {
    this.loggerService.debug('test debug msg', this.constructor.name);
  }

  onInfo() {
    this.loggerService.info('test info msg', this.constructor.name);
  }

  onWarn() {
    this.loggerService.warn('test warn msg', this.constructor.name);
  }

  onError() {
    this.loggerService.error('test error msg', this.constructor.name);
  }

  submit() {
    if(!this.form.valid){
      return;
    }
    const logMessage: string = this.form.controls['message'].value;

    const logLevel: string = this.form.controls['logLevel'].value;

    switch (logLevel){
      case "info": {
        this.loggerService.info(logMessage, this.constructor.name);
        break;
      }
      case "debug": {
        this.loggerService.debug(logMessage, this.constructor.name);
        break;
      }
      case "warn": {
        this.loggerService.warn(logMessage, this.constructor.name);
        break;
      }
      case "error": {
        this.loggerService.error(logMessage, this.constructor.name);
        break;
      }
      default:
        console.error(`Invalid Log Level ${logLevel}`)
    }
  }

  onClearLog() {
    this.loggerService.clear();
  }

  onClearFormData() {
    this.form.reset();
    this.form.controls['logLevel'].patchValue(this.loggingLevelList[0]);
  }
}
