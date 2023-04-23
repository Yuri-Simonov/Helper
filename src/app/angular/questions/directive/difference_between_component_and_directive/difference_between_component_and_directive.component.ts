import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-difference-between-component-and-directive',
    templateUrl: './difference_between_component_and_directive.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DifferenceBetweenComponentAndDirectiveComponent {
    panelOpenState: boolean = false;
}
