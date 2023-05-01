import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-route-order',
    templateUrl: './route_order.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RouteOrderComponent {
    panelOpenState: boolean = false;
}
