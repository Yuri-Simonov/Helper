import { Component } from '@angular/core';

@Component({
    selector: 'app-custom-directive',
    templateUrl: './custom_directive.component.html',
})
export class CustomDirectiveComponent {
    panelOpenState: boolean = false;
}
