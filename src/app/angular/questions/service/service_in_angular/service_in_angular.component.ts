import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-service-in-angular',
    templateUrl: './service_in_angular.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServiceInAngularComponent {
    panelOpenState: boolean = false;
}
