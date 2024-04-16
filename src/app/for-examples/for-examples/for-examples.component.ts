import { Component } from '@angular/core';
import {
    Observable,
    concat,
    concatMap,
    concatMapTo,
    delay,
    exhaustMap,
    flatMap,
    from,
    interval,
    map,
    merge,
    mergeMap,
    of,
    switchMap,
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
        //     of('A', 'B', 'C').pipe(
        //         exhaustMap((value) => {
        //             return of(value).pipe(
        //                 delay(1000),
        //                 map((currentValue) => 'Текущее значение потока: ' + currentValue),
        //             );
        //         }),
        //     );
        //     .subscribe(console.log);

        from([1, 2, 3]) // Создаем Observable из массива чисел
            .pipe(
                map((number) => number * 2), // Умножаем каждое число на 2
                // zip(from(['a', 'b', 'c'])), // Комбинируем текущий поток с другим Observable
            )
            .subscribe(console.log); // Выводим результат
    }

    // first = new Observable((subscriber) => {
    //     setTimeout(() => {
    //         subscriber.next('Событие из первого потока');
    //         subscriber.complete();
    //     }, 500);
    // });

    // second = new Observable((subscriber) => {
    //     setTimeout(() => {
    //         subscriber.next('Событие из второго потока');
    //         subscriber.complete();
    //     }, 200);
    // });

    // first = of('A', 'B', 'C');
    // second = of('1', '2', '3', 4);

    // result = zip(this.first, this.second).subscribe(console.log);
    // result2 = zip(this.third, this.forth).subscribe(console.log);
}
