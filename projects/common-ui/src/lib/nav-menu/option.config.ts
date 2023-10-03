import {Input} from "@angular/core";
import {MatIconRegistry} from "@angular/material/icon";

export type OptionConfig = {
  options: MenuOption[];
}

export type MenuOption = {
  routerLink: string;
  label: string;
  iconName: string;
}
