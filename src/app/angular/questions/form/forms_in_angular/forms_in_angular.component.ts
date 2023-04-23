import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-forms-in-angular',
    templateUrl: './forms_in_angular.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormsInAngularComponent {
    panelOpenState: boolean = false;
}
