import { ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ReplaySubject, takeUntil } from 'rxjs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

import { SidebarService } from '../../services/sidebar.service';

const materialModules = [MatToolbarModule, MatIconModule];

@Component({
    selector: 'app-title',
    templateUrl: './title.component.html',
    styleUrls: ['./title.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [materialModules],
})
export class TitleComponent implements OnInit, OnDestroy {
    onDestroy$ = new ReplaySubject<number>(1);
    sidebarState: boolean;

    @Input('title') titleProps: string;
    @Input('visibleIcon') visibleIconProps: boolean = true;

    constructor(private sidebarService: SidebarService) {}

    ngOnInit() {
        this.sidebarService.sidebarState
            .pipe(takeUntil(this.onDestroy$))
            .subscribe((newState) => (this.sidebarState = newState));
    }

    ngOnDestroy() {
        this.onDestroy$.next(0);
        this.onDestroy$.complete();
    }

    changesidebarState(state: boolean): void {
        this.sidebarService.setNewSidebarState(state);
    }
}
