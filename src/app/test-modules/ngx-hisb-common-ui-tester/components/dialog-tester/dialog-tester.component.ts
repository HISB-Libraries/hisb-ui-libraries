import { Component } from '@angular/core';
import {JsonValidator, openTextInputDialog, ResourceTypeValidator} from "ngx-hisb-common-ui";
import {Validators} from "@angular/forms";
import {MatDialog} from "@angular/material/dialog";
import { MatButton } from '@angular/material/button';

@Component({
    selector: 'app-dialog-tester',
    templateUrl: './dialog-tester.component.html',
    styleUrls: ['./dialog-tester.component.scss'],
    imports: [MatButton]
})
export class DialogTesterComponent {
  constructor(
    private _dialog: MatDialog,
  ) {
  }

  openDialog(): void {
    this._dialog.closeAll();
    openTextInputDialog(
      this._dialog,
      {
        title: "Input MDI to EDRS Document Bundle ",
        primaryActionBtnTitle: "Save",
        secondaryActionBtnTitle: "Cancel",
        isPrimaryButtonLeft: false,
        formValidators:[Validators.required, JsonValidator, ResourceTypeValidator],
        formValidationTypes: [
          { name: 'required', display:"Enter or paste content." },
          { name: "jsonValidator", display: "The content should be valid json" },
          { name: "resourceTypeValidator", display: "Resource Type not found." },
        ]
      })
      .subscribe(
        action => {
          if (action == 'primaryAction') {
            console.log("Primary selected")
          } else if (action == 'secondaryAction') {
            console.log('secondary selected');
          }
        }
      );
  }
}
