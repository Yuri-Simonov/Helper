import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-routing-in-angular',
    templateUrl: './routing_in_angular.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RoutingInAngularComponent {
    panelOpenState: boolean = false;
}
