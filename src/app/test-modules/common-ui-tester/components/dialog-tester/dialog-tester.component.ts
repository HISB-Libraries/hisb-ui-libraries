import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {JsonValidator, openTextInputDialog, ResourceTypeValidator} from "common-ui";
import {Validators} from "@angular/forms";

@Component({
  selector: 'app-dialog-tester',
  templateUrl: './dialog-tester.component.html',
  styleUrls: ['./dialog-tester.component.scss']
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
