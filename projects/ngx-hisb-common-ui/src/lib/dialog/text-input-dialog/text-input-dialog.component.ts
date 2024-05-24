import {AfterViewInit, Component, ElementRef, Inject, OnInit, ViewChild} from '@angular/core';

import {
  AbstractControl,
  ReactiveFormsModule,
  UntypedFormControl,
  UntypedFormGroup,
  ValidationErrors
} from "@angular/forms";
import {MatDialogModule, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig, MatDialog} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {TextInputDialogData} from "../domain/text-input-dialog-data";

@Component({
  selector: 'lib-text-input-dialog',
  standalone: true,
  imports: [
    MatButtonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatDialogModule,
    MatInputModule
],
  templateUrl: './text-input-dialog.component.html',
  styleUrls: ['./text-input-dialog.component.css']
})

export class TextInputDialogComponent implements OnInit, AfterViewInit {
  @ViewChild('textareaElement') textareaElement: ElementRef | undefined;
  minNumberOfRows = 20;

  ngAfterViewInit() {
    if (this.textareaElement) {
      this.autoResizeTextarea(this.textareaElement.nativeElement);
    }
  }

  data:  TextInputDialogData= {};
  dialogForm = new UntypedFormGroup({
    content: new UntypedFormControl(null)
  });
  numRows: number=10;

  constructor(
    private dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) private dialogData: any
  ) { }

  onCancel() {
    this.dialogRef.close();
    this.dialogForm.reset();
  }

  onSave() {
    this.dialogRef.close(this.dialogForm.controls['content'].value);
    this.dialogForm.reset();
  }

  ngOnInit(): void {

    this.data.title = this.dialogData.title ?? "";
    this.data.content = this.dialogData.content ?? "Do you want to continue?";
    this.data.primaryActionBtnTitle = this.dialogData.primaryActionBtnTitle ?? "Yes";
    this.data.secondaryActionBtnTitle = this.dialogData.secondaryActionBtnTitle ?? "No";
    this.data.width = this.dialogData.width ?? '4em';
    this.data.height = this.dialogData.width ?? '4em';
    this.data.isPrimaryButtonLeft = this.dialogData.isPrimaryButtonLeft ?? false;
    this.data.inputLabelText = this.dialogData.inputLabelText ?? 'Paste or enter content here';

    if(this.dialogData.content){
      this.dialogForm.controls['content'].patchValue(this.dialogData.content);
    }

    if(this.dialogData.formValidators){
      // Inject the validators
      this.dialogForm.controls['content'].setValidators(this.dialogData.formValidators);
      this.dialogForm.controls['content'].updateValueAndValidity();
      this.data.formValidationTypes = this.dialogData.formValidationTypes
    }

  }

  onSubmit() {
    if(this.dialogForm.valid){
      this.onSave();
      this.data.validatorErrors = '';
    }
    else {
      this.data.validatorErrors = this.getValidationErrors(this.dialogForm.controls['content'].errors, this.data.formValidationTypes);
    }
  }

  getValidationErrors(errors: ValidationErrors | null, errorTypes: any[] | undefined): string {
    if(!errors || !errorTypes){
      console.error("No errors or error type parameters present.");
      return '';
    }
    const errorName = Object.keys(errors)[0];
    const result = errorTypes.find(element => element.name === errorName)?.display;
    if(result) {
      return result;
    }
    else if(errorName){
      console.error("Unable to find error with name " + errorName);
      return "Validation Error Produced";
    }
    else {
      console.log("The validation did not produce any errors")
      return '';
    }
  }

  autoResizeTextarea(textarea: HTMLTextAreaElement): void {
    textarea.style.height = 'auto';
    let lineHeight = parseInt(getComputedStyle(textarea).lineHeight);
    let rows = Math.ceil(textarea.scrollHeight / lineHeight);
    if(rows < this.minNumberOfRows){
      textarea.rows = this.minNumberOfRows;
    }
    else{
      textarea.rows = rows;
    }

  }
}

export function openTextInputDialog(dialog: MatDialog, dialogData?: TextInputDialogData) {

  const config = new MatDialogConfig();

  config.autoFocus = true;
  config.width = dialogData?.width ?? "80%";

  config.data = {
    ...dialogData
  }

  const dialogRef = dialog.open(TextInputDialogComponent, config);

  return dialogRef.afterClosed();
}

export function JsonValidator(control: AbstractControl) {
  if (control.value == null) {
    return null;
  }
  let hasErrors = false;
  try {
    JSON.parse(control.value.trim());
  } catch (e) {
    hasErrors = true;
  }
  if (hasErrors) {
    return {jsonValidator: true};
  }
  return null
}

export function ResourceTypeValidator(control: AbstractControl) {
  if (control.value == null) {
    return null;
  }

  let hasErrors = false;
  let json = null;
  try {
    json = JSON.parse(control.value.trim());
  } catch (e) {
    hasErrors = true;
  }

  if (!json?.resourceType) {
    hasErrors = true;
  }

  if (hasErrors) {
    return {resourceTypeValidator: true};
  }
  return null
}
