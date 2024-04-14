import { Component } from '@angular/core';
import { Observable, concatMap, concatMapTo, delay, flatMap, interval, map, of, switchMap, tap } from 'rxjs';

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
                concatMap((value) => {
                    return of(value).pipe(
                        delay(1000),
                        map((currentValue) => 'Текущее значение потока: ' + currentValue),
                    );
                }),
            )
            .subscribe(console.log);
    }
}
