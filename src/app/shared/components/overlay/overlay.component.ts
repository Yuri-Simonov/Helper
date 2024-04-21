import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-overlay',
    standalone: true,
    templateUrl: './overlay.component.html',
    styleUrl: './overlay.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OverlayComponent {}
