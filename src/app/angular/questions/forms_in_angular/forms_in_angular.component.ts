import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-forms-in-angular',
    templateUrl: './forms_in_angular.component.html',
})
export class FormsInAngularComponent {
    panelOpenState: boolean = false;

    buyTicketForm: FormGroup;

    constructor() {
        this._createForm();
    }

    private _createForm() {
        this.buyTicketForm = new FormGroup({
            passenger: new FormControl('', Validators.required),
            passengerAge: new FormControl(null),
        });
    }
}
