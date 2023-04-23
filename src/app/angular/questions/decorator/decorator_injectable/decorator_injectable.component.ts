import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-decorator-injectable',
    templateUrl: './decorator_injectable.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DecoratorInjectableComponent {
    panelOpenState: boolean = false;
}
