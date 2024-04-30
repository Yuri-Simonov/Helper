import { Component } from '@angular/core';
import {
    Observable,
    concat,
    concatMap,
    concatMapTo,
    delay,
    exhaustMap,
    filter,
    flatMap,
    from,
    fromEvent,
    interval,
    map,
    merge,
    mergeMap,
    of,
    switchMap,
    take,
    tap,
    zip,
} from 'rxjs';

@Component({
    selector: 'app-for-examples',
    standalone: true,
    templateUrl: './for-examples.component.html',
    styleUrl: './for-examples.component.scss',
})
export class ForExamplesComponent {
    ngOnInit() {
        const body = document.querySelector('body');

        if (body) {
            const clicks = fromEvent(body, 'click');
            clicks.subscribe(console.log);
        }
    }
}
