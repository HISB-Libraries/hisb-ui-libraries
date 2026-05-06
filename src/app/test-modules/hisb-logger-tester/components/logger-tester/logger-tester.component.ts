import {Component, computed, OnInit} from '@angular/core';
import { LogLine, LoggerService, NgxConsoleComponent } from "ngx-hisb-logger";
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from "@angular/forms";
import { MatCard, MatCardContent, MatCardHeader, MatCardTitle } from '@angular/material/card';
import { MatFormField, MatLabel, MatInput, MatError } from '@angular/material/input';
import { MatSelect, MatOption } from '@angular/material/select';
import { MatButton } from '@angular/material/button';


@Component({
    selector: 'app-logger-tester',
    templateUrl: './logger-tester.component.html',
    styleUrls: ['./logger-tester.component.scss'],
    imports: [MatCard, MatCardContent, NgxConsoleComponent, MatCardHeader, MatCardTitle, ReactiveFormsModule, MatFormField, MatLabel, MatInput, MatError, MatSelect, MatOption, MatButton]
})

export class LoggerTesterComponent implements OnInit{
  form: FormGroup | undefined;
  constructor(private loggerService : LoggerService, private formBuilder: FormBuilder) {}
  loggingLevelList = ['info', 'debug', 'warn', 'error'];

  loggerData = computed(() => {
    const value = this.loggerService.logs();
    console.log(value);
    return value;
  });

  ngOnInit(): void {
    // this.loggerService.logStream$.subscribe(value => {
    //   console.log(value);
    //   this.loggerData = value;
    // });

    this.form = this.formBuilder.group({
      message: ["Sample log message", [Validators.required]],
      logLevel: [this.loggingLevelList[0]],
      updateOn: 'submit'
    });
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

  copyContent() {
    this.loggerService.copyLogs();
  }
}
