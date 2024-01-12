import { Injectable } from '@angular/core'
import {ImplementationGuide} from "../modal/implementation-guide";

@Injectable()
//TODO: how are these sorted?

// The profiles can be found here https://build.fhir.org/ig/HL7/fhir-mdi-ig/toc.html
export class ValidatorConstants {

  PROFILE_LIST = [
    { name : "Bundle - Document MDI to EDRS",                      url: "http://hl7.org/fhir/us/mdi/StructureDefinition/Bundle-document-mdi-to-edrs"},
    { name : "Composition - MDI to EDRS",                          url: "http://hl7.org/fhir/us/mdi/StructureDefinition/Composition-mdi-to-edrs"},
    { name : "List - Cause of Death Pathway",                      url: "http://hl7.org/fhir/us/mdi/StructureDefinition/List-cause-of-death-pathway"},
    { name : "Observation - Cause of Death Condition",             url: "http://hl7.org/fhir/us/mdi/StructureDefinition/List-cause-of-death-pathway"},
    { name : "Observation - Condition Contributing to Death",      url: "http://hl7.org/fhir/us/mdi/StructureDefinition/Observation-condition-contributing-to-death"},
    { name : "Observation - Death Date",                           url: "http://hl7.org/fhir/us/mdi/StructureDefinition/Observation-death-date"},
    { name : "Observation - Death Injury/Event Occurred at Work",  url: "http://hl7.org/fhir/us/mdi/StructureDefinition/Observation-death-injury-at-work"},
    { name : "Observation - How Death Injury Occurred",            url: "http://hl7.org/fhir/us/mdi/StructureDefinition/Observation-how-death-injury-occurred"},
    { name : "Observation - Manner of Death",                      url: "http://hl7.org/fhir/us/mdi/StructureDefinition/Observation-manner-of-death"},
    { name : "Observation - Decedent Pregnancy",                   url: "http://hl7.org/fhir/us/mdi/StructureDefinition/Observation-decedent-pregnancy"},
    { name : "Observation - Tobacco Use Contributed to Death",     url: "http://hl7.org/fhir/us/mdi/StructureDefinition/Observation-tobacco-use-contributed-to-death"},
    { name : "Bundle - Message Toxicology to MDI",                 url: "http://hl7.org/fhir/us/mdi/StructureDefinition/Bundle-message-tox-to-mdi"},
    { name : "MessageHeader - Toxicology to MDI",                  url: "http://hl7.org/fhir/us/mdi/S∆tructureDefinition/MessageHeader-toxicology-to-mdi"},
    { name : "DiagnosticReport - Toxicology Lab Result to MDI",    url: "http://hl7.org/fhir/us/mdi/StructureDefinition/DiagnosticReport-toxicology-to-mdi"},
    { name : "Specimen - Toxicology Lab",                          url: "http://hl7.org/fhir/us/mdi/StructureDefinition/Specimen-toxicology-lab"},
    { name : "Observation - Toxicology Lab Result",                url: "http://hl7.org/fhir/us/mdi/StructureDefinition/Observation-toxicology-lab-result"},
    { name : "Resource Profile: US Core Practitioner Profile",     url: "http://hl7.org/fhir/us/core/STU4/StructureDefinition-us-core-practitioner.html#root"},
    { name : "Resource Profile: US Core Patient Profile",          url: "https://hl7.org/fhir/us/core/STU4/StructureDefinition-us-core-patient.html#root"},
  ]

  // Validator API link
  static PROD_URI = "https://heat.icl.gtri.org/fhir-validator-service/fhir";

  static DISPLAYED_COLUMNS = ['toggle', 'icon', 'severity', 'fhirPath', 'location'];
  static SEVERITY_LEVELS: string[] = ['error', 'warning', 'information', 'note'];
  static FONT_WIDTH: number = 7.54;

  public static IG_LIST: ImplementationGuide[] = [
    {
      "name": "mdi#1.1.0",
      "valueString": "hl7.fhir.us.mdi#1.1.0",
      "display": "MDI FHIR IG - 1.1.0"
    },
    {
      "name": "mdi#current",
      "valueString": "hl7.fhir.us.mdi#current",
      "display": "MDI FHIR IG - Current"
    },
    {
      "name": "vrdr#2.2.0",
      "valueString": "hl7.fhir.us.vrdr#2.2.0",
      "display": "VRDR FHIR IG - 2.2.0"
    }
  ];

}
