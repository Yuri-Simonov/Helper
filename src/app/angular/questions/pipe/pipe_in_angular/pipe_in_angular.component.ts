import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-pipe-in-angular',
    templateUrl: './pipe_in_angular.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PipeInAngularComponent {
    panelOpenState: boolean = false;
}
