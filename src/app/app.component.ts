import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('flyInOut', [
      state('in', style({ transform: 'translateX(-50%)' })),
      transition('void => *', [
        style({ transform: 'translateY(-100%)' }),
        animate(100),
      ]),
      transition('* => void', [
        animate(100, style({ transform: 'translateY(100%)' })),
      ]),
    ]),
  ],
})
export class AppComponent {
  title = 'weatherApp';
  @HostBinding('@flyInOut')
  public animatePage = true;
  heroTotal = -1;
}
