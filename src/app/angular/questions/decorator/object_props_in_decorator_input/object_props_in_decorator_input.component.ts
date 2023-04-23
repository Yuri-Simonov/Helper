import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-object-props-in-decorator-input',
    templateUrl: './object_props_in_decorator_input.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ObjectPropsInDecoratorInputComponent {
    panelOpenState: boolean = false;
}
