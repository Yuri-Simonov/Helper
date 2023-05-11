import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-value-changes-in-form',
    templateUrl: './value_changes_in_form.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ValueChangesInFormComponent {
    panelOpenState: boolean = false;
}
