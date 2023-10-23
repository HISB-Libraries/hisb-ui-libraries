import { Component } from '@angular/core';

@Component({
  selector: 'app-common-error-tester',
  templateUrl: './common-error-tester.component.html',
  styleUrls: ['./common-error-tester.component.scss']
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
