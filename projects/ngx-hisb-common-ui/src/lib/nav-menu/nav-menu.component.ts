import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {OptionConfig} from "./option.config";
import {MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatTooltipModule} from "@angular/material/tooltip";

import {ActivatedRoute, RouterLink} from "@angular/router";
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
export class NavMenuComponent implements OnChanges {
  @Input() backgroundColor: string = "#646064";
  @Input() contrastColor: string = "white";
  @Input() options: OptionConfig = {options: []};
  @Input() currentOption: number = 0;

  expanded: boolean = true;
  selectedOption = 0;

  constructor(private activatedRoute: ActivatedRoute) { }

  toggleSize() {
    this.expanded = !this.expanded;
  }

  select(i: number) {
    this.selectedOption = i;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['currentOption'].currentValue){
      this.selectedOption = this.currentOption;
    }
  }


}
