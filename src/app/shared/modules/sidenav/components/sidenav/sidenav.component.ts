import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    Output,
} from '@angular/core';

import { IList } from 'src/app/shared/types/list.interface';

@Component({
    selector: 'app-sidenav',
    templateUrl: './sidenav.component.html',
    styleUrls: ['./sidenav.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidenavComponent {
    @Input('list') listProps: IList[];
    @Input('state') stateProps: boolean;

    @Output() stateChange = new EventEmitter<boolean>();

    changeListState(): void {
        this.stateProps = !this.stateProps;
        this.stateChange.emit(this.stateProps);
        this.resetBodyClass();
    }

    resetBodyClass(): void {
        const body = document.querySelector('body');
        body?.classList.toggle('lock');
    }
}
