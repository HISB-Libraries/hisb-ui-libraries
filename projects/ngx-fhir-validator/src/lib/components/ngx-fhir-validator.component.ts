import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild
} from '@angular/core';
import {ValidatorConstants} from "../providers/validator-constants";
import { UntypedFormControl} from "@angular/forms";
import {MatTableDataSource} from "@angular/material/table";
import {FhirValidatorService} from "../services/fhir-validator.service";
import {ResponseItem} from "../modal/response-item";
import {ValidationResults} from "../modal/validation-results";
import {animate, state, style, transition, trigger} from "@angular/animations";
import {ApiResponse} from "../modal/api-response";
import {ValidatorInput} from "../modal/validator-input-format";
import {ImplementationGuide} from "../modal/implementation-guide";

export type SubmitButtonAlignment = 'left' | 'right';
@Component({
  selector: 'lib-ngx-fhir-validator',
  templateUrl: 'ngx-fhir-validator.component.html',
  styleUrls: ['ngx-fhir-validator.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})


export class NgxFhirValidatorComponent {
  @Input() validatorTitle: string = '';
  @Input() validationResultsExpanded: boolean = false; // Validation results details initial state
  @Input() resultDetailsExpandBtnShown: boolean = true; // Show/hide Expand Validation Results btn
  @Input() formatResourceBtnShown: boolean = false; // Show/hide Format Resource btn
  @Input() clearValidatorBtnShown: boolean = true; // Show/hide Clear Validator btn
  @Input() submitBtnShown: boolean = true; // Show/hide Submit btn
  @Input() exportResultsButtonShown = true;
  @Input() submitBtnTitle: string = 'Submit'; //The submit button title. "Submit" is generic name and other apps may want to change it
  @Input() validationInputFormat: ValidatorInput = {format: 'json', accepts: '.json'};
  @Input() maxFileSize = 250000 // Max allowed file size is 250KB
  @Input() submitBtnAlignment: SubmitButtonAlignment = 'right'; // The default location for the Submit btn
  @Input() cancelValidationBtnShown: boolean = true;
  @Input() buttonTxtColor: string  = 'white';
  @Input() buttonBackgroundColor='#4858B8';
  @Input() exportValidationResultsBtnName: string = 'Export Results (.zip)';

  @Output() onValidation = new EventEmitter<ValidationResults>();
  @Output() onApiError = new EventEmitter<any>();
  @Output() onResourceContentChanged = new EventEmitter<any>();
  @Output() onExportValidationResults = new EventEmitter<any>();


  @ViewChild('validatorInput',{static:false, read: ElementRef}) inputRef: any;

  apiResponse: ApiResponse | null;
  fhirResource: string = ''// The Resource.
  resourceFormat = 'json'; // The resource format could be JSON or XML, with JSON being the default format.
  fileName: string = ''; // Name of the file uploaded by the user. We need this to render the filename in the UI.
  validationErrorStr: string = ''; // We use this value to store preliminary error messages or a generic error message.
  hasResponseData = false;  // Indicates if the response generated any messages. If true, we render the report
  parsedFhirResource: string = ''; // We store value of the validator result in order to present it to the user.
  displayedColumns: string[];
  isLoading = false;
  allExpanded = true; // Used to render collapsed/expanded all icon as well as calculate if all results are expanded/collapsed
  severityLevels = ValidatorConstants.SEVERITY_LEVELS;
  severityLevelsFormControl: UntypedFormControl; // A simple form control used for filtering the results.
  dataSource: MatTableDataSource<any>;// Data source for the report table.
  validationFinished = false;
  isValidResource = false; // We use this to render the success message
  serverErrorDetected = false; // Tracks if the server has responded with an error (404, 500). Used to render the error in UI.
  serverErrorList: any [] = []; // Store the data from the OperationOutcome resource
  serverErrorStatus: string = ''; // We store the error response status here (i.e. 404, 500)
  lines : number = 1;
  width : number = 0;
  igList = ValidatorConstants.IG_LIST;
  selectedIG: ImplementationGuide = this.igList[0];

  //TODO remove this code when the API returns a timeout error
  serverTimoutDetected = false;
  SERVER_TIMEOUT_INTERVAL = 240000; //four minutes

  constructor(
    private fhirValidatorService: FhirValidatorService,
  ) {
    this.displayedColumns = ValidatorConstants.DISPLAYED_COLUMNS;
    this.severityLevelsFormControl = new UntypedFormControl(this.severityLevels);
    this.dataSource = new MatTableDataSource<any[]>();
    this.apiResponse = null;
  }

  formatFhirResource(){
    if(this.fhirResource){
      if(this.resourceFormat === 'json' && this.fhirValidatorService.isJson(this.fhirResource)){
        this.fhirResource = this.fhirValidatorService.beautifyJSON(this.fhirResource);
      }
      else if(this.resourceFormat === 'xml' && this.fhirValidatorService.isXmlString(this.fhirResource)){
        this.fhirResource = this.fhirValidatorService.beautifyXML(this.fhirResource);
      }
    }
    this.lineNumbers()
  }

  lineNumbers() {
    const linedStrings = this.fhirResource.split(/[\n\r]/g);
    this.lines = linedStrings.length;
    this.width = this.inputRef.nativeElement.offsetWidth;
    const charInLines = this.width / ValidatorConstants.FONT_WIDTH;

    for (const line of linedStrings) {
      if (line.length > charInLines) {
        this.lines = this.lines + (line.length / charInLines)
      }
    }
  }

  getLineNumbers() {
    return Array.from({length: this.lines}, (_, i) => (i + 1).toString());
  }

  // It is important the format is working with "best effort"
  // That is it may or may not format the text properly and require extensive testing to validate its operation.
  onFormatInput() {
    this.formatFhirResource()
    this.fhirValidatorService.showSuccessMessage("Formatting Attempted.");
  }

  clearUI(){
    this.fhirResource='';
    this.fileName=''
    this.clearValidationErrors();
    this.onResourceContentChanged.emit(this.fhirResource);
  }

  onClear(){
    this.clearUI();
  }

  onFileSelected(event: any) {

    const file: File = event.target.files[0];

    if (file) {
      if(file.size > this.maxFileSize){
        console.error("File too big")
        this.fhirValidatorService.showErrorMessage("This file exceeds " + this.maxFileSize /  1000 + "kb and cannot be processed");
      }
      else {
        // auto toggle the file type radio buttons
        if (file.type === "text/xml") {
          this.resourceFormat = 'xml';
        } else if ("application/json") {
          this.resourceFormat = 'json';
        }

        // set the filename in the UI
        this.fileName = file.name;

        const reader = new FileReader();
        reader.readAsText(file, "UTF-8");
        reader.onload = () => {
          this.fhirResource = reader.result as string;
          this.onResourceContentChanged.emit(this.fhirResource);
          this.formatFhirResource();
        }
        reader.onerror = () => {
          this.fhirValidatorService.showErrorMessage("Unable to open the file.");
        }
      }

    }
    else {
      this.fhirValidatorService.showErrorMessage("Unable to open the file.");
    }
  }

  validateFhirResource(fhirResource?: any, resourceFormat?: string) {
    // Set the stage for the validation. Reset variables to default values.
    if(!fhirResource){
      fhirResource = this.fhirResource
    }
    if(!resourceFormat){
      resourceFormat = this.resourceFormat
    }

    if(!fhirResource || !(resourceFormat === 'json' || resourceFormat === 'xml')){
      console.error("Invalid data passed to the validator.");
    }
    this.isValidResource = true;
    this.hasResponseData = false;
    this.serverErrorList = [];
    this.serverErrorStatus = '';
    this.serverErrorDetected = false;
    this.serverTimoutDetected = false;
    this.severityLevelsFormControl.patchValue(this.severityLevels);

    this.validationErrorStr = this.fhirValidatorService.getUiValidationMessages(fhirResource, resourceFormat);
    if(this.validationErrorStr){
      //see if we can find any obvious issues with the resource here
      this.isValidResource = false;
      this.validationFinished = true;
      this.onValidation.emit({hasBasicErrors: true, isValid: false, resource: fhirResource});
    }
    else {
      // The UI validation passed successfully, and we execute the backend validation.
      this.executeAPIValidation(fhirResource, resourceFormat, this.selectedIG?.valueString);
    }
  }

  onPasteFhirResource(event: ClipboardEvent) {
    this.fileName = '';
    if(!this.fhirResource) {
      this.clearUI();
    }
    let text = event.clipboardData?.getData('text') ?? '';
    if (this.fhirValidatorService.isJson(text)) {
      this.resourceFormat = 'json';
    } else if (this.fhirValidatorService.isXmlString(text)) {
      this.resourceFormat = 'xml';
    }
  }

  getLineNumbersBySeverity(apiResponse: ApiResponse | null, severity: string): number[]{
    if(!apiResponse || apiResponse.issue?.length === 0){
      return [];
    }
    return apiResponse.issue
      .filter((element: any) => element.severity == severity)
      .map((element: any) => this.getLineNumberFromLocation(element.location[0]) - 1);
  };

  scrollToElement(location: string ): void {
    const element = document.querySelector(location);
    if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  getLineNumberFromLocation(locationStr: string): number {
    // Get the location from response
    return (locationStr?.length > 0) ? parseInt (locationStr.split(",")[0].replace( /^\D+/g, '')) : 0;
  }

  // When the user selects a location from the errors and warning results, we want to scroll the page to that location.
  onLocationSelected(response: any): void {
    let locationId = ('#mark' + this.getLineNumberFromLocation(response.location[0])).toLowerCase();
    this.scrollToElement(locationId);
  }

  // Sends fhir resource to be validated, renders response

  private executeAPIValidation(fhirResource: any, resourceFormat: string, ig?: string) {
    console.log(ig);
    // Reset values to default state prior to validation.
    this.isLoading = true;
    this.parsedFhirResource = '';
    this.validationFinished = false;
    this.apiResponse = null;

    if(this.resourceFormat === "json"){
      fhirResource = JSON.parse(fhirResource);
    }
    else if(this.resourceFormat === "xml"){
      let fhirResourceXML = new DOMParser().parseFromString(fhirResource, 'text/xml');
      fhirResource = fhirResourceXML.documentElement.outerHTML;
    }

    this.fhirValidatorService.validateFhirResource(fhirResource, resourceFormat, ig)
      .subscribe({
        next: (response) => {
          this.validationFinished = true;
          let issue = response.issue;
          if(issue.length === 1 && issue[0].severity === "Information" && issue[0]?.message.toLowerCase() === "ALL OK".toLowerCase()){
            this.isValidResource = true;
            this.onValidation.emit({isValid: true, resource: fhirResource});
          }
          else {
            this.isValidResource = false;
            this.validationErrorStr = "Please see the validation errors below.";
            this.setValidatorResponse(response, fhirResource);
          }

          // Some strings produced by the validator are long and miss spaces. This could break the UI validation report.
          // Therefore, we insert a space after each coma found in the validation response text.
          issue.forEach((element: any) => {
            element.diagnostics = element.diagnostics.replace(/,(?=[^\s])/g, ", ")
          })


          // sort by line numbers
          issue = issue.sort((a: any, b: any) => {
            return this.getLineNumberFromLocation(a.location?.[0]) - this.getLineNumberFromLocation(b.location?.[0]);
          });

          // mat each item of the response to an object and make sure that the results are in expanded state in the
          // UI validation report.
          this.dataSource.data = issue.map((element: any) => {
            let result: ResponseItem = Object.assign({}, element);
            result.expanded = true;
            return result
          });

          this.dataSource.filterPredicate = this.getFilterPredicate();
          this.apiResponse = response;
          this.apiResponse!.formattedResource = response?.extension?.[0]?.valueString;
        },
        error: (err) => {
          this.isLoading = false;
          this.serverErrorDetected = true;
          this.serverErrorStatus = err.status;
          if(err?.error?.issue){
            this.serverErrorList = err.error.issue;
          }
          this.onApiError.emit(err);
          console.error(err);
        },
        complete: () => {
          this.isLoading = false;
        }
      });

    //TODO make sure to remove this function when the server side timeout is implemented.
    setTimeout(
      () => {
        if(this.isLoading) {
          this.isLoading = false;
          this.serverTimoutDetected = true;
        }
      }, this.SERVER_TIMEOUT_INTERVAL
    );

  }

  toggle() {
    this.allExpanded = !this.allExpanded;
    this.dataSource.data.forEach((item: any) => item.expanded = this.allExpanded);
  }

  onFilterResults() {
    this.dataSource.filter = this.severityLevelsFormControl.value.join(',');
  }

  getFilterPredicate() {
    return function (row: any, filters: string) {
      let matchFilter: boolean = false;
      const filterArray = filters.split(',');
      filterArray.forEach((filter: string) => {
          if(row.severity.toLowerCase().indexOf(filter.toLowerCase())!= -1){
            matchFilter = true;
          }
        }
      )
      return matchFilter;
    };
  }

  onCancelValidation (){
    this.isLoading = false;
  }

  checkExpandCollapseAllStatus() {
    /*
    * When all elements are collapsed we want to change the expansion icon to render "expand all"
    * When all elements are expanded we want to change the expansion icon to "collapse all"
    * This will save extra unnecessary click for the user
    */
    const expandedElementsCount = this.dataSource.data.filter(element => element['expanded']).length;
    if(expandedElementsCount === this.dataSource.data.length){
      this.allExpanded = true;
    }
    else if(expandedElementsCount === 0){
      this.allExpanded = false;
    }
  }

  isFilterEnabled(severity: string) {
    return !!this.dataSource.data.find((element: any) => element.severity.toLowerCase() === severity.toLowerCase());
  }

  getCount(level: any) {
    return this.dataSource.data
      .filter((element: any) => element.severity.toLowerCase() === level.toLowerCase())
      .length;
  }

  onCloseServerErrorMessage() {
    this.serverErrorDetected = false;
    this.serverErrorList = [];
    this.serverErrorStatus = '';
  }

  private setValidatorResponse(apiResponse: any, resource: string) {
    const errorsCount = apiResponse.issue.filter((element: any) => element.severity == 'error')?.length ?? 0;
    const warningsCount = apiResponse.issue.filter((element: any) => element.severity == 'warning')?.length ?? 0;
    const infoCount = apiResponse.issue.filter((element: any) => element.severity == 'information')?.length ?? 0;
    const notesCount = apiResponse.issue.filter((element: any) => element.severity == 'note')?.length ?? 0;

    let validationResult: ValidationResults = {};
    validationResult.errorsCount = errorsCount;
    validationResult.warningsCount = warningsCount;
    validationResult.notesCount = notesCount;
    validationResult.infoCount = infoCount;

    validationResult.isValid = errorsCount <= 0;
    validationResult.resource = resource;
    this.onValidation.emit(validationResult);
  }

  clearValidationErrors(){
    this.validationErrorStr = '';
    this.isValidResource = false;
    this.parsedFhirResource = '';
    this.hasResponseData = false;
    this.validationFinished = false;
    this.isLoading = false;
    this.serverErrorDetected = false;
    this.serverErrorList = [];
    this.serverErrorStatus = '';
    this.serverTimoutDetected = false;
    this.apiResponse = null;
  }

  getLineItemClass(item: string, i: number) {

    if(this.getLineNumbersBySeverity(this.apiResponse, 'error').indexOf(i) != -1){
      this.hasResponseData = true;
      return "error-mark";
    }
    else if(this.getLineNumbersBySeverity(this.apiResponse, 'warning').indexOf(i) != -1){
      this.hasResponseData = true;
      return "warning-mark";
    }
    else if(this.getLineNumbersBySeverity(this.apiResponse, 'information').indexOf(i) != -1){
      this.hasResponseData = true;
      return "info-mark";
    }
    else if(this.getLineNumbersBySeverity(this.apiResponse, 'note').indexOf(i) != -1){
      this.hasResponseData = true;
      return "note-mark";
    }

    else return'';
  }


  exportValidationResults() {
    // Add the formatted resource form the validator response to a json file
    // This way the line numbers from the validator report will match the json file numbers
    const jsonResource = this?.apiResponse?.formattedResource || '';
    // Create a pdf report
    const resultsData = this.dataSource.data
      .map(element=> { return {severity: element.severity, diagnostics: element.diagnostics, location: element.location, fhirPath: element?.expression?.[0]}})
      .filter(item => this.severityLevelsFormControl.value.indexOf(item.severity) != -1);
    this.onExportValidationResults.emit({jsonResource: jsonResource, resultsData: resultsData});
  }


}
