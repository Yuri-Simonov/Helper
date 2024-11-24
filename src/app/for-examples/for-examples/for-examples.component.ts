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
    delayWhen,
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
    retryWhen,
    startWith,
    switchMap,
    take,
    tap,
    throwError,
    timer,
    zip,
} from 'rxjs';

@Component({
    selector: 'app-for-examples',
    templateUrl: './for-examples.component.html',
    styleUrl: './for-examples.component.scss',
})
export class ForExamplesComponent {
    ngOnInit() {
        // создаем поток
        const source = interval(1000);
        // выполняем в нем различные действия
        const result = source.pipe(
            map((value) => {
                if (value > 2) {
                    /**
                     * если значение больше 5, генерируем исключение,
                     * которое подхватит оператор retryWhen
                     */
                    throw value;
                }
                return value;
            }),
            retryWhen((errors) =>
                errors.pipe(
                    // логируем сообщение об ошибке
                    tap((value) => console.log('Значение ' + value + ' выше заданного условия!')),
                    // Создаем искусственную задержку в 5 секунд
                    delayWhen((value) => timer(value * 1000)),
                ),
            ),
        );

        result.subscribe((value) => console.log(value));
    }
}
