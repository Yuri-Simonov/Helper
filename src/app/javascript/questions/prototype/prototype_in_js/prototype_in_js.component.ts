import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-prototype-in-js',
    templateUrl: './prototype_in_js.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrototypeInJsComponent {
    panelOpenState: boolean = false;
}
