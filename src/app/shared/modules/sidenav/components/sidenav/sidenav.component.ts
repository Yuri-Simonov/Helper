import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { IList } from '@types';

@Component({
    selector: 'app-sidenav',
    templateUrl: './sidenav.component.html',
    styleUrls: ['./sidenav.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidenavComponent {
    @Input('list') listProps: IList[];
    @Input('state') stateProps: boolean;
}
