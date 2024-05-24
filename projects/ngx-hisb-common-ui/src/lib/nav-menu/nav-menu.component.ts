import {Component, Input, OnInit} from '@angular/core';
import {OptionConfig} from "./option.config";
import {MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatTooltipModule} from "@angular/material/tooltip";

import {RouterLink} from "@angular/router";
import {MatMenuModule} from "@angular/material/menu";

@Component({
  standalone: true,
    imports: [
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatTooltipModule,
    RouterLink,
    MatMenuModule
],
  selector: 'common-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {
  @Input() backgroundColor: string = "#646064";
  @Input() contrastColor: string = "white";
  @Input() options: OptionConfig = {options: []};
  expanded: boolean = true;
  selectedOption = 0;

  constructor() { }

  ngOnInit(): void {
  }

  toggleSize() {
    this.expanded = !this.expanded;
  }

  select(i: any) {
    this.selectedOption = i;
  }
}
