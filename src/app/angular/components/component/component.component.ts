import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-component',
    templateUrl: './component.component.html',
    styleUrls: ['./component.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ComponentComponent {}
