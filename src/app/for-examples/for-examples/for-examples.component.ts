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
export class ForExamplesComponent {
    ngOnInit() {
        const map = new Map();
        map.set(1, 'Hi');
        map.set(2, 'Bye');
        console.log('map', map);

        const mapSource = from(map);
        mapSource.subscribe(console.log);
    }
}
