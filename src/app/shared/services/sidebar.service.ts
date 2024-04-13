import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class SidebarService {
    sidebarState: BehaviorSubject<boolean> = new BehaviorSubject(false);

    constructor() {}

    setNewSidebarState(event: boolean): void {
        this.sidebarState.next(event);
        this.resetBodyClass(event);
    }

    resetBodyClass(event: boolean): void {
        const body = document.querySelector('body');
        event ? body?.classList.add('sidebar-lock') : body?.classList.remove('sidebar-lock');
    }
}
