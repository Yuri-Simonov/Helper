import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarService } from '../../services/sidebar.service';
import { ReplaySubject, takeUntil } from 'rxjs';

@Component({
    selector: 'app-overlay',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './overlay.component.html',
    styleUrl: './overlay.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OverlayComponent implements OnInit {
    onDestroy$ = new ReplaySubject<number>(1);
    sidebarState: boolean = false;

    constructor(
        private sidebarService: SidebarService,
        private cdr: ChangeDetectorRef,
    ) {}

    ngOnInit(): void {
        this.sidebarService.sidebarState.pipe(takeUntil(this.onDestroy$)).subscribe((newState) => {
            this.sidebarState = newState;
            this.cdr.detectChanges();
        });
    }

    changeSidebarState(state: boolean): void {
        this.sidebarService.setNewSidebarState(state);
    }
}
