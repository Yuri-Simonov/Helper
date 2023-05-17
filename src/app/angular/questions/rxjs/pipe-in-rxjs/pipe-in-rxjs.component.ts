import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-pipe-in-rxjs',
    templateUrl: './pipe-in-rxjs.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PipeInRxjsComponent {
    panelOpenState: boolean = false;
}
