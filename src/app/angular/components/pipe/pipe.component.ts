import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-pipe',
    templateUrl: './pipe.component.html',
    styleUrls: ['./pipe.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PipeComponent {}
