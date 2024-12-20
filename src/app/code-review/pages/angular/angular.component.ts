import { Component } from '@angular/core';

import { IList } from 'src/app/shared/interfaces';

import { allAngularExamples } from '../../examples/angular';

@Component({
    selector: 'app-angular',
    templateUrl: './angular.component.html',
    styleUrl: './angular.component.scss',
    standalone: false
})
export class AngularComponent {
    list: IList[] = [{ name: 'Все', path: 'angular', info: allAngularExamples }];
}
