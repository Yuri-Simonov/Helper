import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-from-primitive-to-observable',
    templateUrl: './from_primitive_to_observable.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FromPrimitiveToObservableComponent {
    panelOpenState: boolean = false;
}
