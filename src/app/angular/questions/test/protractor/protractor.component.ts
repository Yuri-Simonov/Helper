import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-protractor',
    templateUrl: './protractor.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProtractorComponent {
    panelOpenState: boolean = false;
}
