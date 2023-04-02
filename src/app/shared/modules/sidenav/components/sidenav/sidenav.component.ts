import { Component, Input } from '@angular/core';

import { IList } from 'src/app/shared/types/list.interface';

@Component({
    selector: 'app-sidenav',
    templateUrl: './sidenav.component.html',
    styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent {
    @Input('list') listProps: IList[];
}
