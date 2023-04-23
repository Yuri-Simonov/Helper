import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-prototype',
    templateUrl: './prototype.component.html',
    styleUrls: ['./prototype.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrototypeComponent {
    panelOpenState = false;
}
