import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-component-in-angular',
    templateUrl: './component_in_angular.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ComponentInAngularComponent {
    panelOpenState: boolean = false;
}
