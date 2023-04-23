import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-difference-between-input-and-output',
    templateUrl: './difference_between_input_and_output.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DifferenceBetweenInputAndOutputComponent {
    panelOpenState: boolean = false;
}
