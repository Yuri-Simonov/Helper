import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-rxjs',
    templateUrl: './rxjs.component.html',
    styleUrls: ['./rxjs.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RxjsComponent {}
