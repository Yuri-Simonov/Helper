import { Component } from '@angular/core';
import {
    Observable,
    concat,
    concatMap,
    concatMapTo,
    delay,
    exhaustMap,
    flatMap,
    interval,
    map,
    merge,
    mergeMap,
    of,
    switchMap,
    tap,
} from 'rxjs';

@Component({
    selector: 'app-for-examples',
    standalone: true,
    templateUrl: './for-examples.component.html',
    styleUrl: './for-examples.component.scss',
})
export class ForExamplesComponent {
    ngOnInit() {
        of('A', 'B', 'C').pipe(
            exhaustMap((value) => {
                return of(value).pipe(
                    delay(1000),
                    map((currentValue) => 'Текущее значение потока: ' + currentValue),
                );
            }),
        );
        // .subscribe(console.log);
    }

    first = new Observable((subscriber) => {
        setTimeout(() => {
            subscriber.next('Событие из первого потока');
            subscriber.complete();
        }, 500);
    });

    second = new Observable((subscriber) => {
        setTimeout(() => {
            subscriber.next('Событие из второго потока');
            subscriber.complete();
        }, 200);
    });

    result = merge(this.first, this.second).subscribe(console.log);
}
