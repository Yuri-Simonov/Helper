import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class SidenavService {
    sidebarState: BehaviorSubject<boolean> = new BehaviorSubject(false);

    constructor() {}

    setNewSidebarState(event: boolean): void {
        this.sidebarState.next(event);
        this.resetBodyClass();
    }

    resetBodyClass(): void {
        const body = document.querySelector('body');
        body?.classList.toggle('sidebar-lock');
    }
}
