import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-account-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {}
