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
        of(1, 2, 3)
            .pipe(map((x) => x * x))
            .subscribe((v) => console.log(`Текущее значение: ${v}`));
    }
}
