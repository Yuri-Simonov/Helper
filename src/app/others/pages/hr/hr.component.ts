import { Component } from '@angular/core';

import { IList } from '../../../shared/interfaces';

import { allOthersData } from '../../data/hr';

@Component({
    selector: 'app-hr',
    templateUrl: './hr.component.html',
    styleUrl: './hr.component.scss',
    standalone: false
})
export class HrComponent {
    list: IList[] = [{ name: 'Все', path: 'hr', info: allOthersData }];
}
