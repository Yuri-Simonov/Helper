import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-routing',
    templateUrl: './routing.component.html',
    styleUrls: ['./routing.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RoutingComponent {}
