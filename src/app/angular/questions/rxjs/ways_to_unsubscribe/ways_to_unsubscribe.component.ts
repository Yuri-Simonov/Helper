import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ReplaySubject, switchMap, takeUntil } from 'rxjs';

@Component({
    selector: 'app-ways-to-unsubscribe',
    templateUrl: './ways_to_unsubscribe.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WaysToUnsubscribeComponent {
    panelOpenState: boolean = false;
}
