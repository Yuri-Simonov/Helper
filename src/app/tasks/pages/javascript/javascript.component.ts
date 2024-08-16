import { Component } from '@angular/core';

import { IList } from '@types';

import { allJavaScriptTasks } from '../../tasks/javascript';

@Component({
    selector: 'app-javascript',
    templateUrl: './javascript.component.html',
    styleUrl: './javascript.component.scss',
})
export class JavascriptComponent {
    list: IList[] = [{ name: 'Все', path: 'javascript', info: allJavaScriptTasks }];
}
