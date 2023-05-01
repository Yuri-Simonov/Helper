import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-non-existent-routes',
    templateUrl: './non-existent_routes.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NonExistentRoutesComponent {
    panelOpenState: boolean = false;
}
