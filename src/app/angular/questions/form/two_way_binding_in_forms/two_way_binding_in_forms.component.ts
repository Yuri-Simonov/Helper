import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-two-way-binding-in-forms',
    templateUrl: './two_way_binding_in_forms.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TwoWayBindingInFormsComponent {
    panelOpenState: boolean = false;
}
