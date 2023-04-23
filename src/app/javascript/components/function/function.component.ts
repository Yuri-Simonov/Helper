import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-function',
    templateUrl: './function.component.html',
    styleUrls: ['./function.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FunctionComponent {
    panelOpenState: Boolean;
}
