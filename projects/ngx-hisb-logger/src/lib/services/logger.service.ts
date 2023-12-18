import { Injectable } from '@angular/core';
import { BehaviorSubject} from "rxjs";
import {LogLevel} from "../modal/log-level";
import {LogLine} from "../modal/log-line";
import { Clipboard } from '@angular/cdk/clipboard';
@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  constructor(private clipboard: Clipboard){
  }


  private logStream = new BehaviorSubject<LogLine[]>([]);
  logStream$ = this.logStream.asObservable();
  private log(line: LogLine) {
    this.logStream.next(this.logStream.value.concat(line));
  }

  debug(msg: string, source: string) {
    const line: LogLine = new LogLine(msg, LogLevel.Debug, source);
    this.log(line);
  }

  info(msg: string, source: string) {
    const line: LogLine = new LogLine(msg, LogLevel.Info, source);
    this.log(line);
  }

  warn(msg: string, source: string) {
    const line: LogLine = new LogLine(msg, LogLevel.Warn, source);
    this.log(line);
  }

  error(msg: string, source: string) {
    const line: LogLine = new LogLine(msg, LogLevel.Error, source);
    this.log(line);
  }

  clear() {
    this.logStream.next([])
  }

  /**
   * Copy the content to from the log to a clipboard.
   * Presently the format we use is 'timestamp - log level - source (this is currently the source of the class) - message'
   */
  copyLogs(){
    const logs= this.logStream.value.map(logLine=> `${logLine.timeStamp} - ${logLine.level} -${logLine.source} - ${logLine.line}`).join("\n");
    this.clipboard.copy(logs);
  }
}
