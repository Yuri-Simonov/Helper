import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-service-import',
    templateUrl: './service_import.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServiceImportComponent {
    panelOpenState: boolean = false;
}
