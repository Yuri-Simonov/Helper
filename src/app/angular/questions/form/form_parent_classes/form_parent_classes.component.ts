import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-form-parent-classes',
    templateUrl: './form_parent_classes.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormParentClassesComponent {
    panelOpenState: boolean = false;
}
