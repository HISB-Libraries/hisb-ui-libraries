import {Inject, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnvironmentHandlerService {

  constructor(@Inject('serverBaseUrl') private serverBaseUrl: any) { }

  getFhirServerBaseURL(): string {
    let serverBaseUrl = this.serverBaseUrl;
    if (!this.serverBaseUrl.endsWith("/")) {
      serverBaseUrl = serverBaseUrl.concat("/");
    }
    return serverBaseUrl;
  }

}

