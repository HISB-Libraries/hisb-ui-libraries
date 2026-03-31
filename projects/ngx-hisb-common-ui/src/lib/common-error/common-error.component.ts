import {ChangeDetectionStrategy, Component, input, output} from '@angular/core';
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
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommonErrorComponent {
  errorCode = input<string | number>();
  errorMessage = input<string>("Server error. Please check the developer console for details.");
  buttonName = input<string>("Retry");

  buttonClickEvent = output<void>();

  onBtnClick(): void {
    this.buttonClickEvent.emit();
  }
}
