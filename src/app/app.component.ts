import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { NavMenuComponent } from 'ngx-hisb-common-ui';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, NavMenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'hisb-ui-library-workspace';
}
