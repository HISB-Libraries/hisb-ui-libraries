import {Component, OnInit} from '@angular/core';
import {OptionConfig} from "ngx-hisb-common-ui";
import {MatIconRegistry} from "@angular/material/icon";
import {DomSanitizer} from "@angular/platform-browser";
import {ActivatedRoute} from "@angular/router";
import {take} from "rxjs";

export class AppConfiguration {
  static config: AppConfiguration = {
    title: "Raven",
    subTitle: "Medicolegal Death Investigation FHIR Implementation Guide Reference Implementation and Testing Platform",
    color: "#646064",
    contrastColor: "#fafafa",
    workflowTitles: {
      mdiToEdrs: "MDI and EDRS Document",
      toxToMdi: "Tox to MDI Message"
    },
    modules: {
      recordViewer: {
        title: "Record Viewer",
        route: "record-viewer",
        color: "#003057",
        icon: "record-viewer"
      },
      recordImport: {
        title: "Record Import",
        route: "record-import",
        color: "#428057",
        icon: "record-import"
      },
      recordComparison: {
        title: "Record Comparison",
        route: "record-comparison",
        color: "#B65454",
        icon: "record-comparison"
      },
      fhirValidator: {
        title: "FHIR Validator",
        route: "fhir-validator",
        color: "#916F2B",
        icon: "fhir-validator"
      },
      workflowSimulator: {
        title: "Workflow Simulator",
        route: "workflow-simulator",
        color: "#335963",
        icon: "workflow-simulator"
      },
      adminPanel: {
        title: "Event Admin Panel",
        route: "admin-panel",
        color: "#B65454",
        icon: "admin_panel"
      },
      commonNaveMenu: {
        title: "Common Nav Menu",
        route: "common-nav-menu",
        color: "#B65454",
        icon: "admin_panel"
      }
    }
  }

  title: string;
  subTitle: string;
  color: string;
  contrastColor: string;
  workflowTitles: {
    [x: string | number | symbol]: string;
  };
  modules: {
    [x: string | number | symbol]: Module;
  };
}

class Module {
  title: string;
  route: string;
  color: string;
  icon: string;
}

@Component({
  selector: 'app-common-nav-menu-tester',
  templateUrl: './common-nav-menu-tester.component.html',
  styleUrl: './common-nav-menu-tester.component.scss'
})
export class CommonNavMenuTesterComponent implements OnInit{
  optionConfig: OptionConfig;
  color = AppConfiguration.config.color;
  contrastColor = AppConfiguration.config.contrastColor;
  navMenuInitialOption: any;

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private activatedRoute: ActivatedRoute) {
    this.optionConfig = {
      options: [
        {
          routerLink: "/",
          label: "Home",
          iconName: "home"
        },
        {
          routerLink: AppConfiguration.config.modules['recordViewer'].route,
          label: AppConfiguration.config.modules['recordViewer'].title,
          iconName: "record_viewer"
        },
        {
          routerLink: AppConfiguration.config.modules['recordImport'].route,
          label: AppConfiguration.config.modules['recordImport'].title,
          iconName: "record_import"
        },
        {
          routerLink: AppConfiguration.config.modules['recordComparison'].route,
          label: AppConfiguration.config.modules['recordComparison'].title,
          iconName: "record_comparison"
        },
        {
          routerLink: AppConfiguration.config.modules['fhirValidator'].route,
          label: AppConfiguration.config.modules['fhirValidator'].title,
          iconName: "fhir_validator"
        },
        {
          routerLink: AppConfiguration.config.modules['workflowSimulator'].route,
          label: AppConfiguration.config.modules['workflowSimulator'].title,
          iconName: "workflow_simulator"
        },
        {
          routerLink: AppConfiguration.config.modules['adminPanel'].route,
          label: AppConfiguration.config.modules['adminPanel'].title,
          iconName: "admin_panel"
        },
        {
          routerLink: AppConfiguration.config.modules['commonNaveMenu'].route,
          label: AppConfiguration.config.modules['commonNaveMenu'].title,
          iconName: "common-nav-menu"
        }
      ]
    }
  }

  ngOnInit(): void {

    const path = "assets/svg-icons";
    this.matIconRegistry.addSvgIcon("fhir_logo", this.domSanitizer
      .bypassSecurityTrustResourceUrl(`${path}/LOGO_FHIR_2.svg`));
    this.matIconRegistry.addSvgIcon("home", this.domSanitizer
      .bypassSecurityTrustResourceUrl(`${path}/home.svg`));
    this.matIconRegistry.addSvgIcon("record_comparison", this.domSanitizer
      .bypassSecurityTrustResourceUrl(`${path}/record-comparison.svg`));
    this.matIconRegistry.addSvgIcon("record_viewer", this.domSanitizer
      .bypassSecurityTrustResourceUrl(`${path}/record-viewer.svg`));
    this.matIconRegistry.addSvgIcon("record_import", this.domSanitizer
      .bypassSecurityTrustResourceUrl(`${path}/record-import.svg`));
    this.matIconRegistry.addSvgIcon("workflow_simulator", this.domSanitizer
      .bypassSecurityTrustResourceUrl(`${path}/workflow-simulator.svg`));
    this.matIconRegistry.addSvgIcon("fhir_validator", this.domSanitizer
      .bypassSecurityTrustResourceUrl(`${path}/fhir-validator.svg`));
    this.matIconRegistry.addSvgIcon("admin_panel", this.domSanitizer
      .bypassSecurityTrustResourceUrl(`${path}/admin-panel.svg`));
    this.matIconRegistry.addSvgIcon("common-nav-menu", this.domSanitizer
      .bypassSecurityTrustResourceUrl(`${path}/common-nav-menu.svg`));

    this.activatedRoute.url.pipe(take(1)).subscribe(
      result => {
        this.navMenuInitialOption = this.optionConfig.options?.findIndex(el => el.routerLink == result?.[0].path) || 0;
      });
  }

}
