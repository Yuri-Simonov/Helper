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
    someObservable: Observable<any> = of(1, 'текст', ['123', 0]);

    ngOnInit() {
        this.someObservable.subscribe(console.log);
    }
}
