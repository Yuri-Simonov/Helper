import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-service-lifecycle',
    templateUrl: './service_lifecycle.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServiceLifecycleComponent {
    panelOpenState: boolean = false;
}
