import { Component } from '@angular/core';
import {
    Observable,
    Subscriber,
    catchError,
    combineLatest,
    concat,
    concatMap,
    concatMapTo,
    delay,
    exhaustMap,
    filter,
    flatMap,
    forkJoin,
    from,
    fromEvent,
    interval,
    map,
    merge,
    mergeMap,
    of,
    pluck,
    startWith,
    switchMap,
    take,
    tap,
    throwError,
    zip,
} from 'rxjs';

@Component({
    selector: 'app-for-examples',
    standalone: true,
    templateUrl: './for-examples.component.html',
    styleUrl: './for-examples.component.scss',
})
export class ForExamplesComponent {
    source = throwError(() => new Error('какая-то ошибка')); // имитируем ошибку

    ngOnInit() {
        of(1, 2, 3, 4, 5)
            .pipe(
                map((n) => {
                    if (n === 4) {
                        throw 'four!';
                    }
                    return n;
                }),
                catchError((err, caught) => caught),
                take(30),
            )
            .subscribe((x) => console.log(x));
    }
}
