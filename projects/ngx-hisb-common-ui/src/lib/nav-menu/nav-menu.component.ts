import {AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {OptionConfig} from "./option.config";
import {MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatTooltipModule} from "@angular/material/tooltip";

import {NavigationEnd, Router, RouterLink} from "@angular/router";
import {MatMenuModule} from "@angular/material/menu";
import {filter, take, tap} from "rxjs";


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
export class NavMenuComponent implements  AfterViewInit {
  @Input() backgroundColor: string = "#646064";
  @Input() contrastColor: string = "white";
  @Input() options: OptionConfig = {options: []};
  currentRoute: string; //We only use this variable to store the current route, it is set in the constructor and user in the ngAfterInit

  expanded: boolean = true;
  selectedOption = 0;

  constructor(private router: Router) {
    // To grab the router events immediately we need to subscribe to them in the constructor
    this.setNavMenuInitialRoute();
  }

  toggleSize() {
    this.expanded = !this.expanded;
  }

  select(i: number) {
    this.selectedOption = i;
  }

  private setNavMenuInitialRoute(){
    this.router.events.pipe(
      filter(e => e instanceof NavigationEnd),
      take(1),
    ).subscribe(event => {
      if(event?.['url']){
        this.currentRoute = this.extractPath(event?.['url']);
      }
    })
  }

  /**
   * We use this function to extract the current path from the current url
   * @param inputString
   * @private
   */
  private extractPath(inputString) {
    const firstSlashIndex = inputString.indexOf('/');

    if (firstSlashIndex === -1) {
      return '';
    }

    const secondSlashIndex = inputString.indexOf('/', firstSlashIndex + 1);

    if (secondSlashIndex === -1) {
      return inputString.substring(firstSlashIndex + 1);
    } else {
      return inputString.substring(firstSlashIndex + 1, secondSlashIndex);
    }
  }

  ngAfterViewInit(): void {
    //Now that we have the options object, we select the current route using the this.currentRoute variable
    const index = this.options.options.findIndex(option=> option.routerLink == this.currentRoute);
    if(index >= 0 ){
      this.selectedOption = index
    }
  }

}
