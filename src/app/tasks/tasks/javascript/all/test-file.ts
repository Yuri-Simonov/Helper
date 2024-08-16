import { IInfo } from '@types';

export const TEST_FILE: IInfo = {
    title: 'Название задачи',
    body: `Описание задачи`,
    tasks: [
        {
            title: 'Название решения задачи',
            body: `Решение задачи
			 <pre><code class="language-javascript">@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
})</code></pre>`,
            selected: false,
        },
    ],
    selected: false,
    lastUpdate: '16.08.2024',
};
