import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-many-router-outlets',
    templateUrl: './many_router-outlets.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ManyRouterOutletsComponent {
    panelOpenState: boolean = false;
}
