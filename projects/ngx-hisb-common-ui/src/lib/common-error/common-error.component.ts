import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MatButtonModule} from "@angular/material/button";
import {BrowserModule} from "@angular/platform-browser";

@Component({

  standalone: true,
  imports: [
    MatButtonModule,
    BrowserModule
],
  selector: 'lib-common-error',
  templateUrl: './common-error.component.html',
  styleUrls: ['./common-error.component.scss'],

})
export class CommonErrorComponent {
  @Input() errorCode: string | number;
  @Input() errorMessage: string = "Server error. Please check the developer console for details.";
  @Input() buttonName: string="Retry";
  @Output() buttonClickEvent = new EventEmitter();

  onBtnClick(){
    this.buttonClickEvent.emit();
  }
}
