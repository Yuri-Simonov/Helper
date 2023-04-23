import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-custom-pipe',
    templateUrl: './custom_pipe.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomPipeComponent {
    panelOpenState: boolean = false;
}
