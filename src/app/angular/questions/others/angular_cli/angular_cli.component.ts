import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-angular-cli',
    templateUrl: './angular_cli.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AngularCliComponent {
    panelOpenState: boolean = false;
}
