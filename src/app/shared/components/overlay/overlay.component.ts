import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-overlay',
    templateUrl: './overlay.component.html',
    styleUrl: './overlay.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OverlayComponent {}
