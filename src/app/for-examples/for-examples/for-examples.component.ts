import { Component } from '@angular/core';
import {
    Observable,
    Subscriber,
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
        // of('A', 'B', 'C')
        //     .pipe(
        //         exhaustMap((value) => {
        //             return of(value).pipe(
        //                 delay(1000), // создаем искусственную задержку в 1 секунду
        //                 map((currentValue) => 'Текущее значение потока: ' + currentValue),
        //             );
        //         }),
        //     )
        //     .subscribe({
        //         next: (value) => console.log('Текущее значение: ', value),
        //         error: (error) => console.log('Ошибка: ', error),
        //         complete: () => console.log('Поток завершен'),
        //     });

        const observables = {
            a: of(1).pipe(delay(1000), startWith(0)),
            b: of(5).pipe(delay(3000), startWith(0)),
            c: of(10).pipe(delay(5000), startWith(0)),
        };
        const combined = forkJoin(observables);
        combined.subscribe(console.log);
        // Logs
        // { a: 0, b: 0, c: 0 } immediately
        // { a: 1, b: 0, c: 0 } after 1s
        // { a: 1, b: 5, c: 0 } after 5s
        // { a: 1, b: 5, c: 10 } after 10s
    }
}
