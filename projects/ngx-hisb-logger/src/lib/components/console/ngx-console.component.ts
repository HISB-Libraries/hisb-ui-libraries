import {ChangeDetectionStrategy, Component, effect, ElementRef, input, viewChild} from '@angular/core';
import {LogLine} from "../../modal/log-line";
import {CommonModule} from "@angular/common";

@Component({
    selector: 'ngx-console',
    templateUrl: './ngx-console.component.html',
    styleUrls: ['./ngx-console.component.css'],
    standalone: true,
    imports: [CommonModule],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgxConsoleComponent {
  myScrollContainer = viewChild<ElementRef>('terminal');

  logs = input<LogLine[]>([]);

  constructor() {
    // Effect to scroll when logs change
    effect(() => {
      const logs = this.logs(); // Track the signal
      const container = this.myScrollContainer();

      if (container?.nativeElement) {
        this.scrollToElement();
      }
    });
  }

  scrollToElement(): void {
    const container = this.myScrollContainer();
    if (container?.nativeElement) {
      container.nativeElement.scroll({
        top: container.nativeElement.scrollHeight,
        left: 0,
        behavior: 'smooth'
      });
    }
  }
}
