import { IInfo } from '@types';

export const HOW_OBSERVABLE_WORKS: IInfo = {
    title: 'Класс <span class="variable">Observable</span>',
    body: `<p>
                <code>Observable</code> - это класс, представляющий собой
                <span class="attention">объект-конструктор источника события</span>, который может обрабатывать как
                синхронный, так и асинхронный код.
            </p>
            <p>
                Сам по себе <code>Observable</code> не будет работать, потому что это лишь объект-конструктор.
                <span class="attention">
                    Чтобы написанный код внутри <code>Observable</code> заработал, на него необходимо подписаться с
                    помощью метода <code>subscribe</code></span
                >:
            </p>
            <pre><code class="language-typescript">export class AppComponent {
    someObservable$ = new Observable(() => {
        console.log('Какие-то данные');
    });

    ngOnInit() {
		// здесь мы подписались на Observable и получили сообщение в консоли
        this.someObservable$.subscribe(console.log);
    }
}</code></pre>
            <p>
                Функция, которая находится внутри <code>new Observable(...)</code>, вызывается в момент, когда
                происходит подписка на <code>Observable</code>. И первым аргументом, в момент ее вызова, ей доступен
                тот, кто подписался на данный <code>Observable</code>, т.е., "подписчик" или "наблюдатель":
            </p>
            <pre><code class="language-typescript">export class AppComponent {
    someObservable$ = new Observable((sub) => {...});
}

// sub = subscriber (с англ. "подписчик").
// Или еще называют аргумент obs = observer (с англ. "наблюдатель").
// Но по сути это одно и то же.</code></pre>
            <p>
                Внутри данной функции можно писать любую логику. Но в конечном итоге все равно все приходит к трём
                опциональным методам: <code>next</code>, <code>error</code> и <code>complete</code>:
            </p>
            <ul>
                <li><span class="attention">next</span> - используется для отправки данных подписчику;</li>
                <li>
                    <span class="attention">error</span> - служит для генерации ошибки, которая аварийно завершает
                    поток;
                </li>
                <li><span class="attention">complete</span> - служит для успешного завершения потока.</li>
            </ul>
            <pre><code class="language-typescript">export class AppComponent {
    someObservable$ = new Observable((sub) => {
        sub.next('Отправлю данные в Observable');
        sub.error('Отправлю ошибку в Observable');
        sub.complete();
    });

    ngOnInit() {
        this.someObservable$.subscribe(console.log);
    }
}</code></pre>
            <p>
                Методы <code>next</code> и <code>error</code> могут принимать аргументом данные, так и быть без них.
                Если ничего не передавать в них, то в <code>Observable</code>, при срабатывании данных методов,
                отправится <code>undefined</code>. Метод <code>complete</code> ничего не принимает в качестве аргумента.
            </p>
            <p>
                При этом не обязательно вызывать все эти 3 метода сразу. Они все являются опциональными и вызываются при
                необходимости.
            </p>
            <p>
                Когда мы используем методы <code>next</code>, <code>error</code> или <code>complete</code>, то данные
                попадают уже непосредственно в сам поток и искать их уже нужно в методе <code>subscribe</code>. Сделать
                это можно различными способами.
            </p>
            <pre><code class="language-typescript">// 1-ый способ

ngOnInit() {
	this.someObservable$.subscribe(console.log, console.log);
}</code></pre>
            <p>
                В первый <code>console.log</code> попадут данные при вызове <code>sub.next(...)</code>, а во второй при
                вызове <code>sub.error(...)</code>. Т.к. метод <code>complete</code> ничего не принимает в качестве
                аргумента, то и логировать нам нечего.
            </p>
            <p>
                Фактически, данный способ - это просто краткая запись 2-го способа ниже. Он удобен, если вы не хотите
                добавлять текстовое сообщение в консоль.
            </p>
            <pre><code class="language-typescript">// 2-ой способ

ngOnInit() {
	this.someObservable$.subscribe(
		(value) => console.log('2-ой next:', value),
		(error) => console.log('2-ой error:', error),
		() => console.log('2-ой поток успешно завершен')
	);
}</code></pre>
            <p>
                Здесь аналогично 1-ому способу в первую функцию попадут данные при вызове <code>sub.next(...)</code>, а
                во второй при вызове <code>sub.error(...)</code>. Но теперь мы можем еще как-то обработать и вызов
                метода <code>sub.complete()</code> третьей функцией. В примере выше просто выводится в консоль сообщение
                об успешном завершении потока.
            </p>
            <pre><code class="language-typescript">// 3-ий способ
ngOnInit() {
	this.someObservable$.subscribe({
		next: (value) => console.log('3-ий next:', value),
		error: (error) => console.log('3-ий error:', error),
		complete: () => console.log('3-ий поток успешно завершен'),
	});
}</code></pre>
            <p>
                3-ий способ является уже более современным, т.к. мы можем обрабатывать в подписке нужные нам методы по
                их ключу.
            </p>
            <pre><code class="language-typescript">// 4-ый способ
ngOnInit() {
	this.someObservable$.subscribe({
		next(value) {
			console.log('4-ый next:', value);
		},
		error(error) {
			console.log('4-ый error:', error);
		},
		complete() {
			console.log('4-ый поток успешно завершен');
		},
	});
}</code></pre>
            <p>
                4-ый способ фактически копия 3-го способа. Только в 3-ем способе функционал написан через стрелочные
                функции, а в 4-ом способе через классический вариант написания функций.
            </p>
            <p>Метод <code>next</code> может вызываться неограниченное количество раз:</p>
            <pre><code class="language-typescript">export class AppComponent {
    someObservable$ = new Observable((sub) => {
        sub.next(1);
        sub.next(2);
        sub.next(3);
    });

    ngOnInit() {
        this.someObservable$.subscribe(console.log);
    }
}</code></pre>
            <p>В поток один за другим будут отправлены значения <code>1</code>, <code>2</code> и<code>3</code>.</p>
            <p>
                Также многое зависит от того, в каком месте расположены методы <code>error</code> и/или
                <code>complete</code>. Если после них ниже по коду идут другие методы, то они не будут выполнены при
                срабатывании выше методов <code>error</code> и/или <code>complete</code>, т.к. они завершают поток. А
                <span class="attention">если поток завершен, то в него уже нет смысла что-то пытаться передать</span>:
            </p>
            <pre><code class="language-typescript">export class AppComponent {
	someObservable$ = new Observable((sub) => {
        sub.next('Этот метод выполнится');
		sub.complete();

        sub.next('Этот метод никогда не выполнится');
    });

    ngOnInit() {
        this.someObservable$.subscribe();
    }
}</code></pre>
            <p>Другой пример:</p>
            <pre><code class="language-typescript">export class AppComponent {
	someObservable$ = new Observable((sub) => {
        sub.next('Этот метод выполнится');
		sub.error('Здесь возникнет аварийное завершение потока');

		// Метод complete ниже никогда не выполнится
		sub.complete();
        sub.next('И этот метод тоже не выполнится');
    });

    ngOnInit() {
        this.someObservable$.subscribe();
    }
}</code></pre>
            <p>
                Если <code>Observable</code> не имеет метода <code>complete</code> и нет его обработки в методе
                <code>subscribe</code>, то не забывайте самостоятельно отписываться от таких подписок.
            </p>
            <pre><code class="language-typescript">ngOnDestroy() {
	this.someObservable$.unsubscribe();
}</code></pre>
<p>Также перед тем, как данные попадут в метод <code>subscribe</code>, их можно обработать различным образом в методе <code>pipe</code>:</p>
<pre><code class="language-typescript">ngOnInit() {
	this.someObservable$
		.pipe(
			// Если входящие данные имеют тип string, например 
			map(value => value.toUpperCase())
		)
		.subscribe();
}</code></pre>`,
    selected: false,
    lastUpdate: '09.07.2024',
    footerLinks: [
        {
            path: 'https://youtu.be/vHDtZp2QltI',
        },
    ],
};
