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
    pluck,
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
        of('A', 'B', 'C')
            .pipe(
                exhaustMap((value) => {
                    return of(value).pipe(
                        delay(1000), // создаем искусственную задержку в 1 секунду
                        map((currentValue) => 'Текущее значение потока: ' + currentValue),
                    );
                }),
            )
            .subscribe({
                next: (value) => console.log('Текущее значение: ', value),
                error: (error) => console.log('Ошибка: ', error),
                complete: () => console.log('Поток завершен'),
            });
    }
}
