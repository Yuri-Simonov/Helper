import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-custom-control',
    templateUrl: './custom_control.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomControlComponent {
    panelOpenState: boolean = false;
}
