import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-others',
    templateUrl: './others.component.html',
    styleUrls: ['./others.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OthersComponent {}
