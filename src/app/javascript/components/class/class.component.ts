import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-class',
    templateUrl: './class.component.html',
    styleUrls: ['./class.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClassComponent {}
