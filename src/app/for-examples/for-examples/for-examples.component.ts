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
// export class ForExamplesComponent {
//     ngOnInit() {
//         const numbers = [1, 2, 3];
//         const observableNumbers = from(numbers);
//         observableNumbers.subscribe(
//             (value) => console.log('Текущее значение: ', value),
//             (error) => console.log('Ошибка в потоке: ', error),
//             () => console.log('Поток завершен!'),
//         );
//     }
// }
export class ForExamplesComponent {
    someObservable: Observable<any> = of(1, 'текст', ['123', 0]);

    ngOnInit() {
        this.someObservable.subscribe(
            (value) => console.log('Текущее значение: ', value),
            (error) => console.log('Ошибка в потоке: ', error),
            () => console.log('Поток завершен!'),
        );
    }
}
