import {
    ChangeDetectionStrategy,
    Component,
    ViewChildren,
} from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { IList } from '@types';

import { allGitQuestions } from './../../questions/all';
import { MatAccordion } from '@angular/material/expansion';

@Component({
    selector: 'app-git',
    templateUrl: './git.component.html',
    styleUrls: ['./git.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GitComponent {
    list: IList[] = [{ name: 'Все', path: 'all', questions: allGitQuestions }];
    listState: boolean = false;
    currentPath: string;
    currentPathSub: Subscription;
    firstMatAccordionOpening: boolean = true;

    @ViewChildren(MatAccordion) accordion: MatAccordion[];

    constructor(private router: Router) {}

    ngOnInit(): void {
        this.currentPath = this.router.url;
        this.currentPathSub = this.router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
                this.currentPath = this.slicePath(event.url);
            }
        });
        this.currentPath = this.slicePath(this.currentPath);
    }

    ngOnDestroy(): void {
        this.currentPathSub.unsubscribe();
    }

    setNewListState(event: boolean): void {
        this.listState = event;
    }

    slicePath(fullPath: string): string {
        const pathsArray = fullPath.split('/');
        return pathsArray[pathsArray.length - 1];
    }
}
