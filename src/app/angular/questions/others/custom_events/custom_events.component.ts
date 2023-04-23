import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-custom-events',
    templateUrl: './custom_events.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomEventsComponent {
    panelOpenState: boolean = false;
}
