import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-guards-in-angular',
    templateUrl: './guards_in_angular.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GuardsInAngularComponent {
    panelOpenState: boolean = false;
}
