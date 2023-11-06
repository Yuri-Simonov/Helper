import {
    ChangeDetectionStrategy,
    Component,
    OnDestroy,
    OnInit,
} from '@angular/core';
import { SidenavService } from '../../../services/sidenav.service';
import { ReplaySubject, takeUntil } from 'rxjs';

interface IHeaderChapters {
    path: string;
    name: string;
    disabled: boolean;
}

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit, OnDestroy {
    onDestroy$ = new ReplaySubject<number>(1);
    chapters: IHeaderChapters[] = [
        { path: 'javascript', name: 'Javascript', disabled: false },
        { path: 'angular', name: 'Angular', disabled: false },
        { path: 'git', name: 'Git', disabled: false },
        { path: 'others', name: 'Разное', disabled: true },
    ];
    sidenavState: boolean;

    constructor(private sidenavService: SidenavService) {}

    ngOnInit() {
        this.sidenavService.sidebarState
            .pipe(takeUntil(this.onDestroy$))
            .subscribe((newState) => (this.sidenavState = newState));
    }

    ngOnDestroy() {
        this.onDestroy$.next(0);
        this.onDestroy$.complete();
    }

    changeSidenavState(state: boolean): void {
        this.sidenavService.setNewSidebarState(state);
    }
}
