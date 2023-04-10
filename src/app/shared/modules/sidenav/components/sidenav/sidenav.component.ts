import { Component, EventEmitter, Input, Output } from '@angular/core';

import { IList } from 'src/app/shared/types/list.interface';

@Component({
    selector: 'app-sidenav',
    templateUrl: './sidenav.component.html',
    styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent {
    @Input('list') listProps: IList[];
    @Input('state') stateProps: boolean;

    @Output() stateChange = new EventEmitter<boolean>();

    changeListState(): void {
        this.stateProps = false;
        this.stateChange.emit(this.stateProps);
    }
}
