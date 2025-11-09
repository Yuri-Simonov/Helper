import { Component, effect, signal } from '@angular/core';

@Component({
    selector: 'app-for-examples',
    templateUrl: './for-examples.component.html',
    styleUrl: './for-examples.component.scss',
})
export class ForExamplesComponent {
    count = signal(0);
    private effectRef = effect(() => {
        console.log('Count changed:', this.count());
    });

    increment() {
        this.count.update((v) => v + 1);
    }

    stop() {
        this.effectRef.destroy();
        console.log('Effect destroyed!');
    }
}
