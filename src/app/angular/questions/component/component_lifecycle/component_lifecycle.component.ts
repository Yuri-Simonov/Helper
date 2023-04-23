import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-component-lifecycle',
    templateUrl: './component_lifecycle.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ComponentLifecycleComponent {
    panelOpenState: boolean = false;
}
