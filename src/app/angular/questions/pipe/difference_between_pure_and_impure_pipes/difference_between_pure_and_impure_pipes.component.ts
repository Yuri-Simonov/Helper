import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-difference-between-pure-and-impure-pipes',
    templateUrl: './difference_between_pure_and_impure_pipes.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DifferenceBetweenPureAndImpurePipesComponent {
    panelOpenState: boolean = false;
}
