import { Component } from '@angular/core';
import { CommonErrorComponent } from 'ngx-hisb-common-ui';

@Component({
    selector: 'app-common-error-tester',
    templateUrl: './common-error-tester.component.html',
    styleUrls: ['./common-error-tester.component.scss'],
    imports: [CommonErrorComponent]
})
export class CommonErrorTesterComponent {

  onButtonClicked() {
    //Reload the window after 1 second
    console.log("Reload Triggered");
    setTimeout(()=> {
      window.location.reload();
    }, 1000)
  }
}
