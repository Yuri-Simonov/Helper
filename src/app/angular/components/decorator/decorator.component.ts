import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-decorator',
    templateUrl: './decorator.component.html',
    styleUrls: ['./decorator.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DecoratorComponent {}
