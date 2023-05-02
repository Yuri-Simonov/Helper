import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-routes-with-params',
    templateUrl: './routes_with_params.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RoutesWithParamsComponent {
    panelOpenState: boolean = false;
}
