import { IInfo } from '@types';

export const ERROR_HANDLING_METHODS: IInfo = {
    title: 'Способы обработки ошибок в <span class="variable">RxJs</span>',
    body: `<p>
                Чтобы приложение "не падало" из-за возможной ошибки (например, сервер не отвечает на запрос), эти самые
                ошибки можно и нужно обрабатывать, предусматривая всевозможные сценарии их возникновения.
            </p>
            <p>
                В библиотеке RxJS для обработки ошибок существуют отдельный тип операторов, в который входят такие
                операторы, как:
                <code class="dialog" dialog_angular_rxjs-operators_catch-error>catchError</code>,
                <code class="dialog" dialog_angular_rxjs-operators_retry>retry</code> и
                <code class="dialog" dialog_angular_rxjs-operators_retry-when>retryWhen</code>
            </p>`,
    selected: false,
    lastUpdate: '16.05.2024',
};
