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
    retry,
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
    ngOnInit() {
        const source = interval(1000);
        const result = source.pipe(
            mergeMap((value) => (value > 2 ? throwError(() => 'Ошибка') : of(value))),
            retry(2), // Повторяем попытку при возникновении ошибки 2 раза
        );

        result.subscribe({
            next: (value) => console.log(value),
            error: (error) =>
                console.log(`${error}: Был произведен повтор 2 раза. На третий раз поток завершился с ошибкой!`),
        });
    }
}
