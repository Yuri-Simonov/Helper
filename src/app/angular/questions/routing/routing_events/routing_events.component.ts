import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-routing-events',
    templateUrl: './routing_events.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RoutingEventsComponent {
    panelOpenState: boolean = false;
}
