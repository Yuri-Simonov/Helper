import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-own-method-or-property-in-prototype',
    templateUrl: './own_method_or_property_in_prototype.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OwnMethodOrPropertyInPrototypeComponent {
    panelOpenState: boolean = false;
}
