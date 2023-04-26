import { Component } from '@angular/core';
import { Observable, from, of } from 'rxjs';

@Component({
    selector: 'app-difference-between-observable-and-promise',
    templateUrl: './difference_between_observable_and_promise.component.html',
})
export class DifferenceBetweenObservableAndPromiseComponent {
    panelOpenState: boolean = false;
}
