import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-dependency-injection',
    templateUrl: './dependency_injection.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DependencyInjectionComponent {
    panelOpenState: boolean = false;
}
