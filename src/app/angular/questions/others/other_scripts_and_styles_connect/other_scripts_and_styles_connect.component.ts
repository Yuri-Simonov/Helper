import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-other-scripts-and-styles-connect',
    templateUrl: './other_scripts_and_styles_connect.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OtherScriptsAndStylesConnectComponent {
    panelOpenState: boolean = false;
}