import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-directive-lifecycle',
    templateUrl: './directive_lifecycle.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DirectiveLifecycleComponent {
    panelOpenState: boolean = false;
}
