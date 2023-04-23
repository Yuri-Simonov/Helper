import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-renderer',
    templateUrl: './renderer.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RendererComponent {
    panelOpenState: boolean = false;
}
