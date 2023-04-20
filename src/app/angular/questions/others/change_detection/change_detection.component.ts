import { Component } from '@angular/core';

@Component({
    selector: 'app-change-detection',
    templateUrl: './change_detection.component.html',
})
export class ChangeDetectionComponent {
    panelOpenState: boolean = false;
}
