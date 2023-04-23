import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-compilation-mechanisms',
    templateUrl: './compilation_mechanisms.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompilationMechanismsComponent {
    panelOpenState: boolean = false;
}
