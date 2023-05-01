import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-navigation-in-angular',
    templateUrl: './navigation_in_angular.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationInAngularComponent {
    panelOpenState: boolean = false;
}
