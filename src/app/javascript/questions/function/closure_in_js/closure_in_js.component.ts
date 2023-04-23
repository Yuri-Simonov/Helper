import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-closure-in-js',
    templateUrl: './closure_in_js.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClosureInJsComponent {
    panelOpenState: boolean = false;
}
