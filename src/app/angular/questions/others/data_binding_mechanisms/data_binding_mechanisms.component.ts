import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-data-binding-mechanisms',
    templateUrl: './data_binding_mechanisms.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DataBindingMechanismsComponent {
    panelOpenState: boolean = false;
}
