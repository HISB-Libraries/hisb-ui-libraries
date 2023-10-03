import {DialogData} from "./dialog-data";

export interface ValidatorType {
  name: string, display: string
}

export interface TextInputDialogData extends DialogData{
  inputLabelText?: string,
  validatorErrors?: string,
  formValidators?: any[],
  formValidationTypes?: ValidatorType[]
}
