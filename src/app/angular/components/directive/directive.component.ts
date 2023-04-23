import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-directive',
    templateUrl: './directive.component.html',
    styleUrls: ['./directive.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DirectiveComponent {}
