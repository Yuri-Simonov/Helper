import { Component } from '@angular/core';

import { IList } from 'src/app/shared/interfaces';

import { allJavaScriptTasks } from '../../tasks/javascript';

@Component({
    selector: 'app-javascript',
    templateUrl: './javascript.component.html',
    styleUrl: './javascript.component.scss',
})
export class JavascriptComponent {
    list: IList[] = [{ name: 'Все', path: 'javascript', info: allJavaScriptTasks }];
}
