import { IInfo } from '@types';

export const ERROR_HANDLING_METHODS: IInfo = {
    title: 'Способы обработки ошибок в <span class="variable">RxJs</span>',
    body: `<p>
                Чтобы ваше приложение "не падало" из-за возможной ошибки
                (например, сервер не отвечает на ваш запрос), эти самые ошибки
                можно и нужно обрабатывать.
            </p>
            <p>В Angular для обработки ошибок существуют следующие операторы: <code class="dialog" dialog_angular_rxjs-operators_catch-error>catchError</code>, <code class="dialog" dialog_angular_rxjs-operators_retry>retry</code>, <code class="dialog" dialog_angular_rxjs-operators_retry-when>retryWhen</code> и <code class="dialog" dialog_angular_rxjs-operators_on-error-resume-next-with>onErrorResumeNextWith
</code></p>
            <i class="subtitle">Оператор onErrorResumeNext / onErrorResumeNextWith</i>
            <p>
                Суть данного оператора заключается в том, что
                <span class="attention"
                    >когда происходит какая-то ошибка, он переключается на
                    другой <code>Observable</code></span
                >
                (своего рода запасной/страхующий поток).
            </p>
            <pre><code class="language-typescript">source = new Observable(subscriber => {
	console.log('попытка подключения');
	subscriber.error('ошибка!');
});

planB = of('План "Б" на случай ошибки');

subscription = source.pipe(onErrorResumeNext(planB))
	.subscribe(
		val => console.log('next:', val),
		err => console.error('error:', err),
		() => console.log('completed: поток завершен')
	);</code></pre>
            <p>Результат выполнения кода из примера выше:</p>
            <pre><code class="language-typescript">// попытка подключения
// ошибка!
// completed: поток завершен</code></pre>`,
    selected: false,
    lastUpdate: '14.05.2024',
};
