import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-module-in-angular',
    templateUrl: './module_in_angular.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModuleInAngularComponent {
    panelOpenState: boolean = false;
}
