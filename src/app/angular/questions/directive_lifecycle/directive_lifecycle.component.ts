import { Component } from '@angular/core';

@Component({
    selector: 'app-directive-lifecycle',
    templateUrl: './directive_lifecycle.component.html',
})
export class DirectiveLifecycleComponent {
    panelOpenState: boolean = false;
}
