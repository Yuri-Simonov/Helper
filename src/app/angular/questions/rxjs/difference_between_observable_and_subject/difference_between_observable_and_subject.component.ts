import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-difference-between-observable-and-subject',
    templateUrl: './difference_between_observable_and_subject.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DifferenceBetweenObservableAndSubjectComponent {
    panelOpenState: boolean = false;
}
