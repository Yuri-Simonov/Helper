import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-change-detection',
    templateUrl: './change_detection.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChangeDetectionComponent {
    panelOpenState: boolean = false;
}
