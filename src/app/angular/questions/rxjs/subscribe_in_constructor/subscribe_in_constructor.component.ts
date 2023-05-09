import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-subscribe-in-constructor',
    templateUrl: './subscribe_in_constructor.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SubscribeInConstructorComponent {
    panelOpenState: boolean = false;
}
