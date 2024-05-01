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
    // ngOnInit() {
    //     fromEvent(document, 'click')
    //         .pipe(take(2))
    //         .subscribe({
    //             next: () => console.log('Сделан клик'),
    //             error: () => console.log('Ошибка'),
    //             complete: () => console.log('Поток завершен'),
    //         });
    // }

    // ngOnInit() {
    //     const numbers = [1, 2, 3];
    //     const observableNumbers = from(numbers);
    //     observableNumbers.subscribe({
    //         next: (value) => console.log('Текущее значение: ', value),
    //         error: (error) => console.log('Ошибка: ', error),
    //         complete: () => console.log('Поток завершен'),
    //     });
    // }

    someObservable: Observable<any> = of(1, 'текст', ['123', 0]);

    ngOnInit() {
        this.someObservable.subscribe({
            next: (value) => console.log('Текущее значение: ', value),
            error: (error) => console.log('Ошибка: ', error),
            complete: () => console.log('Поток завершен'),
        });
    }
}
