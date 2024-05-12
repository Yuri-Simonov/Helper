import { IInfo } from '@types';

export const DIFFERENCE_BETWEEN_OBSERVABLE_AND_SUBJECT: IInfo = {
    title: 'Разница между <span class="variable">Observable</span> и <span class="variable">Subject</span>',
    body: `<p>
            Основное отличие этих двух типов объектов:
            <span class="attention">объекты </span> <code>Observable</code>
            <span class="attention">
                предназначены для одноадресной рассылки, а
            </span>
            <code>Subject</code>
            <span class="attention"> — для многоадресной рассылки.</span>
        </p>
        <p>
            Если рассмотреть более детально, то в потоковом программировании
            есть два основных интерфейса: <code>Observable</code> (наблюдаемый)
            и <code>Observer</code>
            (наблюдатель).
        </p>
        <p>
            <code>Observable</code> предназначен для потребителя, его можно
            преобразовать и подписаться:
        </p>
        <pre><code class="language-typescript">observable$.pipe(map(x => ...), filter(x => ...)).subscribe(x => ...)</code></pre>
        <p>
            <code>Observer</code> — это интерфейс, который используется для
            подачи наблюдаемого источника, будь то какие-то данные, ошибка или
            завершение наблюдения:
        </p>
        <pre><code class="language-typescript">observer.next(newItem)
observer.error(error)
observer.complete()</code></pre>
        <p>
            При этом мы можем создать новый <code>Observable</code> с помощью
            Observer:
        </p>
        <pre><code class="language-typescript">const newObs$ = new Observable((observer) => {
	observer.next('тут передаем данные'); переданные данные попадут в data
	observer.error('тут передаем ошибки'); переданные данные попадут в error
	observer.complete(); // данный метод не принимает параметры
});

newObs$.subscribe(
	(data) => {
		console.log('тут обрабатываем данные')
	},
	(error) => {
		console.log('тут обрабатываем ошибки')
	},
	() => {
		console.log('тут обрабатываем завершение работы Observable')
	},
);</code></pre>
        <p>
            Или мы можем использовать <code>Subject</code>, который реализует
            интерфейсы <code>Observable</code> и <code>Observer</code>:
        </p>
        <pre><code class="language-typescript">const subject$ = new Subject();

subject$.subscribe((value) => console.log('Первая подписка:', value));
subject$.next(3);
subject$.subscribe((value) => console.log('Вторая подписка:', value));
subject$.next(9);</code></pre>
<p>Тогда в консоли мы увидим следующее:</p>
<pre><code class="language-typescript">Первая подписка: 3
Первая подписка: 9
Вторая подписка: 9</code></pre>`,
    selected: false,
    lastUpdate: '09.02.2024',
};
