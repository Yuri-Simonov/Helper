import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-ondestroy',
    templateUrl: './ondestroy.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OndestroyComponent {
    panelOpenState: boolean = false;
}
