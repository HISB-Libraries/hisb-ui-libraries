import { Component, Inject, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogConfig, MatDialogModule, MatDialogRef} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {DialogData} from "../domain/dialog-data";

@Component({
  selector: 'lib-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.css'],
  standalone: true,
  imports: [
    MatDialogModule,
    MatButtonModule
]
})
export class ConformationDialogComponent implements OnInit {

  data: DialogData = {};

  constructor(
    private dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) private dialogData: DialogData
  ) {
  }

  onSecondaryClick() {
    this.dialogRef.close('secondaryAction');
  }

  onDefaultClick() {
    this.dialogRef.close('primaryAction');
  }

  ngOnInit(): void {
    this.data.title = this.dialogData.title ?? "";
    this.data.content = this.dialogData.content ?? "Do you want to continue?";
    this.data.primaryActionBtnTitle = this.dialogData.primaryActionBtnTitle ?? "Yes";
    this.data.secondaryActionBtnTitle = this.dialogData.secondaryActionBtnTitle ?? "No";
    this.data.width = this.dialogData.width ?? '4em';
    this.data.height = this.dialogData.width ?? '4em';
    this.data.isPrimaryButtonLeft = this.dialogData.isPrimaryButtonLeft ?? false;
  }
}

export function openConfirmationDialog(dialog: MatDialog, dialogData?: DialogData) {

  const config = new MatDialogConfig();

  config.autoFocus = true;
  config.width = dialogData?.width
  config.height = dialogData?.height;

  config.data = {
    ...dialogData
  }

  const dialogRef = dialog.open(ConformationDialogComponent, config);

  return dialogRef.afterClosed();
}
