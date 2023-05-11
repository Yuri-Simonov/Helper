import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-async-routing',
    templateUrl: './async_routing.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AsyncRoutingComponent {
    panelOpenState: boolean = false;
}
