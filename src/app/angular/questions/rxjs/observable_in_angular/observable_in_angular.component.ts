import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-observable-in-angular',
    templateUrl: './observable_in_angular.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ObservableInAngularComponent {
    panelOpenState: boolean = false;
}
