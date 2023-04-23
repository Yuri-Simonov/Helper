import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-custom-directive',
    templateUrl: './custom_directive.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomDirectiveComponent {
    panelOpenState: boolean = false;
}
