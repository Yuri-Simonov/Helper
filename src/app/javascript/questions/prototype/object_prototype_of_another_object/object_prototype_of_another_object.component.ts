import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-object-prototype-of-another-object',
    templateUrl: './object_prototype_of_another_object.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ObjectPrototypeOfAnotherObjectComponent {
    panelOpenState: boolean = false;
}
