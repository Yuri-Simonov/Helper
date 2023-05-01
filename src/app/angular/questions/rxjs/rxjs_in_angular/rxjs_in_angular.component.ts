import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-rxjs-in-angular',
    templateUrl: './rxjs_in_angular.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RxjsInAngularComponent {
    panelOpenState: boolean = false;
}
