import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-change-detection-ref',
    templateUrl: './change_detection_ref.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChangeDetectionRefComponent {
    panelOpenState: boolean = false;
}
