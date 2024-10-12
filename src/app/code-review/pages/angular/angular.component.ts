import { Component } from '@angular/core';

import { IList } from '@types';

import { allAngularExamples } from '../../examples/angular';

@Component({
    selector: 'app-angular',
    templateUrl: './angular.component.html',
    styleUrl: './angular.component.scss',
})
export class AngularComponent {
    list: IList[] = [{ name: 'Все', path: 'angular', info: allAngularExamples }];
}
