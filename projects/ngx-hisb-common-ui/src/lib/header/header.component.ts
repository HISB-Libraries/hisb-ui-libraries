import {Component, Input, OnInit} from '@angular/core';
import {HeaderConfig} from "./header.config";
import {MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {CommonModule, NgIf} from "@angular/common";
import {MatMenuModule} from "@angular/material/menu";
import {RouterLink} from "@angular/router";
import {MatDividerModule} from "@angular/material/divider";
import {BrowserModule} from "@angular/platform-browser";

@Component({
  standalone: true,
  imports: [
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    CommonModule,
    MatMenuModule,
    RouterLink,
    MatDividerModule,
    BrowserModule
  ],
  selector: 'common-header',
  styleUrls: ['./header.component.css'],
  templateUrl: 'header.component.html'
})
export class HeaderComponent implements OnInit {
  @Input() configuration: HeaderConfig | undefined;
  @Input() title: string = "";
  @Input() version: string = "";
  @Input() subtitle: string = "";
  @Input() splitSubtitleEvenly: boolean = false;
  @Input() showUserManagement: boolean = false;
  @Input() backgroundColor: string = "#646064";
  subtitleInsert: any = undefined;

  constructor() {}

  ngOnInit(): void {
    if (this.splitSubtitleEvenly) {
      this.subtitleInsert = this.splitSubtitle(this.subtitle);
    }
    else {
      this.subtitleInsert = this.subtitle;
    }
  }

  private splitSubtitle(subtitle: string): string {
    const subtitleWordList = subtitle.split(" ");
    const halfLength = Math.floor(subtitleWordList.length / 2);
    let recombinedSubtitle = "";
    subtitleWordList.map((word, i) => {
      recombinedSubtitle += word + " ";
      if (i == halfLength) {
        recombinedSubtitle += "<br>";
      }
    });
    return recombinedSubtitle
  }

  openLink(link: string | undefined) {
    if (link) window.open(link,'_blank');
  }
}
