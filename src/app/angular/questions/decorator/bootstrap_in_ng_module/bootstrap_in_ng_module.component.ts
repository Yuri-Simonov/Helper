import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-bootstrap-in-ng-module',
    templateUrl: './bootstrap_in_ng_module.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BootstrapInNgModuleComponent {
    panelOpenState: boolean = false;
}
