import {ChangeDetectionStrategy, Component, effect, inject, input, signal} from '@angular/core';
import {OptionConfig} from "./option.config";
import {MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatTooltipModule} from "@angular/material/tooltip";

import {NavigationEnd, Router, RouterLink} from "@angular/router";
import {MatMenuModule} from "@angular/material/menu";
import {filter, take} from "rxjs";


@Component({
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
  standalone: true,
  styleUrls: ['./nav-menu.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavMenuComponent {
  // Signal inputs
  backgroundColor = input<string>("#646064");
  contrastColor = input<string>("white");
  options = input<OptionConfig>({options: []});

  // Local state as signals
  expanded = signal<boolean>(true);
  selectedOption = signal<number>(0);
  private currentRouteStr = signal<string>('');

  // Inject dependencies
  private router = inject(Router);

  constructor() {
    // Set initial route on component initialization
    this.setNavMenuInitialRoute();

    // Effect to update selected option when options or route changes
    effect(() => {
      const currentRoute = this.currentRouteStr();
      const opts = this.options();

      if (opts?.options?.length > 0) {
        const index = opts.options.findIndex(option => option.routerLink === currentRoute);
        if (index >= 0) {
          this.selectedOption.set(index);
        }
      }
    });
  }

  toggleSize(): void {
    this.expanded.update(value => !value);
  }

  select(i: number): void {
    this.selectedOption.set(i);
  }

  private setNavMenuInitialRoute(): void {
    this.router.events.pipe(
      filter(e => e instanceof NavigationEnd),
      take(1),
    ).subscribe(event => {
      if (event?.['url']) {
        const route = this.extractPath(event['url']);
        this.currentRouteStr.set(route);
      }
    });
  }

  /**
   * We use this function to extract the current path from the current url
   * @param inputString
   * @private
   */
  private extractPath(inputString: string): string {
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
}
