import { IQuestion } from '@types';

export const rxjsQuestions: IQuestion[] = [
    // {
    //     title: '',
    //     body: ``,
    //     selected: false,
    // },
    {
        title: 'Библиотека <span class="variable">RxJs</span>',
        body: `<p>
            <span class="attention">RxJS</span> — это библиотека, реализующая
            принципы реактивного программирования для JavaScript. Основанная на
            объектах типа <code>Observable</code>, она упрощает написание и
            контроль асинхронного и событийного кода.
        </p>`,
        selected: false,
        lastUpdate: '09.02.2024',
    },
    {
        title: 'Принцип работы <span class="variable">Observable</span> в <span class="variable">RxJs</span>',
        body: `<p>
            <code>Observable</code> - это
            <span class="attention">объект-конструктор источника события</span>,
            который может обрабатывать как синхронный, так и асинхронный код.
        </p>
        <p>
            Сам по себе <code>Observable</code> не будет работать, потому что
            это лишь объект-конструктор. Чтобы написанный нами код внутри
            <code>Observable</code> заработал, на него необходимо подписаться с
            помощью метода <code>subscribe</code>.
        </p>
<pre><code class="language-typescript">const newObs$ = new Observable((observer) => {
	console.log('какой-то наш код внутри Observable');
});
	
newObs$.subscribe(); // здесь мы подписались на Observable и получили сообщение в консоли</code></pre>
        <p>
            Выше рассмотрен самый простой вариант подписки на источник события.
            Но объект <code>observer</code>, принимаемый callback-функцией
            внутри класса <code>Observable</code>, под капотом имеет 3
            необязательных (опциональных) метода:
        </p>
        <ul>
            <li>
                <span class="attention">next</span> - принимает значение,
                которое будет возвращено функции-обработчику;
            </li>
            <li>
                <span class="attention">error</span> - принимает значение,
                возвращаемое функции-обработчику ошибок;
            </li>
            <li>
                <span class="attention">complete</span> - вызывается для
                уведомления "подписчиков" об окончании рассылки.
            </li>
        </ul>
        <p>
            Соответственно, в методе <code>subscribe</code> мы также можем
            прописать логику для каждого из перечисленных выше методов объекта:
        </p>
<pre><code class="language-typescript">const newObs$ = new Observable((observer) => {
	observer.next('тут передаем данные'); переданные данные попадут в data
	observer.error('тут передаем ошибки'); переданные данные попадут в error
	observer.complete(); // данный метод не принимает параметры
})
	
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
        <p>Альтернативная запись для подписки через объект с методами:</p>
<pre><code class="language-typescript">newObs$.subscribe({
	next: (data) => {
		console.log('тут обрабатываем данные')
	},
	error: (error) => {
		console.log('тут обрабатываем ошибки')
	},
	complete: () => {
		console.log('тут обрабатываем завершение работы Observable')
	},
});</code></pre>
        <p>
            Если <code>Observable</code> не имеет метода <code>complete</code> и
            нет его обработки в методе <code>subscribe</code>, то не забывайте
            самостоятельно отписываться от таких подписок.
        </p>
		<pre><code class="language-typescript">newObs$.unsubscribe(); // не забываем отписаться</code></pre>`,
        selected: false,
        lastUpdate: '09.02.2024',
    },
    {
        title: 'Преобразование примитивного типа данных в тип <span class="variable">Observable</span>',
        body: `<p>
            Для преобразования данных из примитивов в тип <code>Observable</code>,
            в RxJs существуют специальные для этого операторы. Например,
            <code>of</code> и <code>from</code>.
        </p>
        <p>
            Оператор <code>of</code> подходит для случаев, когда необходимо из
            массива данных создать <code>Observable</code> и при подписке на
            источник события получать тот же массив целиком. При этом, оператор
            <code>of</code> создает поток с одним или несколькими элементами,
            который завершается сразу после их отправки.
        </p>
<pre><code class="language-typescript">export class SomeComponent {
    numbers$: Observable = of([1, 2, 3]); // (*)

    ngOnInit() {
        this.numbers$.subscribe((data: number[]) => {
            console.log(data); // [1, 2, 3]
        });
    }
}</code></pre>
        <p>Строка под "<code>*</code>" равносильна следующей записи:</p>
<pre><code class="language-typescript">numbers$: Observable = new Observable((observer) => {
	observer.next([1, 2, 3]);
});</code></pre>
        <p>
            Если необходимо, чтобы обработчик вместо всего массива сразу получал
            каждый его элемент в отдельности, тогда используется оператор
            <code>from</code>.
        </p>
<pre><code class="language-typescript">export class SomeComponent {
    numbers$: Observable = from([1, 2, 3]);

    ngOnInit() {
        this.numbers$.subscribe((data: number) => {
            console.log(data); // 1, 2, 3
        });
    }
}</code></pre>`,
        selected: false,
        lastUpdate: '09.02.2024',
    },
    {
        title: 'Разница между <span class="variable">Observable</span> и <span class="variable">Promise</span>',
        body: `<p>
                <code>Observable</code> - это
                <span class="attention">конструктор источника событий</span>, а
                <code>Promise</code> - это сам
                <span class="attention">источник событий</span>.
            </p>
            <p>
                Чтобы в <code>Observable</code> появилось событие, на него
                кто-то должен подписаться.
                <span class="attention"
                    >Без подписки это просто набор методов</span
                >. С промисами же иная ситуация. Если интерпретатор кода доходит
                до промиса, то он выполняется и ему не нужны никакие подписчики.
            </p>
            <p>
                Еще одно отличие заключается в том, что у промисов, когда мы
                используем цепочки <code>then</code>, то мы работаем все с тем
                же промисом. В то время, как у <code>Observable</code> мы
                подписываемся каждый раз на новое событие.
            </p>
            <p>Для большего понимания несколько примеров ниже.</p>
            <i class="subtitle">0 подписчиков у Observable</i>
<pre><code class="language-typescript">promise = new Promise(resolve => {
	console.log('Promise создан');
	resolve('результат Promise')
});

source = new Observable(subscriber => {
	console.log('Observable создан');
	subscriber.next('результат Observable');
});</code></pre>
            <p>Результат в консоли:</p>
			<pre><code class="language-typescript">// Promise создан</code></pre>
            <i class="subtitle">1 подписчик у Observable</i>
<pre><code class="language-typescript">promise = new Promise(resolve => {
	console.log('Promise создан');
	resolve('результат Promise')
});

source = new Observable(subscriber => {
	console.log('Observable создан');
	subscriber.next('результат Observable');
});

promise.then(data => console.log('полученные данные:', data));
source.subscribe(val => console.log('полученные данные:', val));</code></pre>
            <p>Результат в консоли:</p>
<pre><code class="language-typescript">// Promise создан
// Observable создан
// результат Observable
// результат Promise</code></pre>
            <i class="subtitle">2 подписчика у Observable</i>
<pre><code class="language-typescript">promise = new Promise(resolve => {
	console.log('Promise создан');
	resolve('результат Promise')
});

source = new Observable(subscriber => {
	console.log('Observable создан');
	subscriber.next('результат Observable');
});

promise.then(data => console.log('полученные данные:', data));
source.subscribe(val => console.log('полученные данные:', val));

promise.then(data => console.log('полученные данные:', data));
source.subscribe(val => console.log('полученные данные:', val));</code></pre>
            <p>Результат в консоли:</p>
<pre><code class="language-typescript">// Promise создан
// Observable создан
// результат Observable
// Observable создан
// результат Observable
// результат Promise
// результат Promise</code></pre>`,
        selected: false,
        lastUpdate: '09.02.2024',
    },
    {
        title: 'Разница между <span class="variable">Observable</span> и <span class="variable">Array</span>',
        body: `<p>
                У объектов <code>Observable</code> (конечно же, имеется ввиду
                операторы метода <code>pipe</code>) и <code>Array</code> (методы массивов) есть
                схожий по названию функционал:
                <code>map, filter, reduce</code> и т.д. Кроме того,
                перечисленный функционал этих объектов работает одинаково под
                капотом. Но все же есть одно но: <span class="attention">разный порядок выполнения кода.</span>
            </p>
            <p>
                Чтобы было более понятно о чем идет речь, ниже представлены
                примеры работы цепочки методов массива и цепочки операторов
                метода <code>pipe</code>.
            </p>
            <i class="subtitle">Array</i>
            <p>Для начала разберемся как ведут себя методы у массивов:</p>
			<pre><code class="language-typescript">someArray = [10, 20, 30, 40];

result = someArray
	.map(item => {
		console.log('[MAP]', item);
		return item + 5;
	})
	.filter(item => {
		console.log('[FILTER]', item);
		return item > 30;
	})
	.reduce((acc, item) => acc + item);

console.log('Результат:', result);</code></pre>
            <p>Результат выполнения кода в консоли:</p>
<pre><code class="language-typescript">// [MAP] 10
// [MAP]: 20
// [MAP]: 30
// [MAP]: 40
// [FILTER]: 15
// [FILTER]: 25
// [FILTER]: 35
// [FILTER]: 45
// Результат: 80</code></pre>
            <p>
                Как видите, сначала массив <code>someArray</code> полностью
                прошел через метод <code>map</code> и только потом он попал в
                метод <code>filter</code> и аналогично затем в метод
                <code>reduce</code>.
            </p>
            <i class="subtitle">Observable</i>
            <p>
                А теперь проделаем все то же самое, но уже для
                <code>Observable</code> с тем же массивом данных:
            </p>
<pre><code class="language-typescript">someArray = [10, 20, 30, 40];

from(someArray).pipe(
	map(item => {
		console.log('[MAP]', item);
		return item + 5;
	})
	.filter(item => {
		console.log('[FILTER]', item);
		return item > 30;
	})
	.reduce((acc, item) => acc + item)
)
.subscribe(val => console.log('next:', val));</code></pre>
            <p>Результат выполнения кода в консоли:</p>
<pre><code class="language-typescript">// [MAP] 10
// [FILTER]: 15
// [MAP]: 20
// [FILTER]: 25
// [MAP]: 30
// [FILTER]: 35
// [MAP]: 40
// [FILTER]: 45
// Результат: 80</code></pre>
            <p>
                Как видите, результат выполнения кода отличается. Теперь каждый
                элемент массива <code>someArray</code> полностью проходит
                цепочку операторов, за исключением оператора
                <code>reduce</code>, т.к. он отрабатывает по завершению потока.
            </p>
            <p>
                Если вам нужен результат после каждого элемента, успешно
                прошедшего операторы <code>map</code> и <code>filter</code>,
                воспользуйтесь оператором <code>scan</code>:
            </p>
<pre><code class="language-typescript">someArray = [10, 20, 30, 40];

from(someArray).pipe(
	map(item => {
		console.log('[MAP]', item);
		return item + 5;
	})
	.filter(item => {
		console.log('[FILTER]', item);
		return item > 30;
	})
	.scan((acc, item) => acc + item)
)
.subscribe(val => console.log('next:', val));</code></pre>
            <p>Результат выполнения кода в консоли:</p>
<pre><code class="language-typescript">// [MAP] 10
// [FILTER]: 15
// [MAP]: 20
// [FILTER]: 25
// [MAP]: 30
// [FILTER]: 35
// Результат: 35
// [MAP]: 40
// [FILTER]: 45
// Результат: 80</code></pre>
            <p>Итог всего вышесказанного:</p>
            <ul>
                <li>
                    <span class="attention">
                        Объект типа <code>Array</code> обрабатывает все свои
                        элементы в одном методе и только после этого переходит к
                        другому методу</span
                    >;
                </li>
                <li>
                    <span class="attention">
                        Объект типа <code>Observable</code> поочередно прогоняет
                        свои элементы через операторы, указанные в методе
                        <code>pipe</code>.
                    </span>
                </li>
            </ul>`,
        selected: false,
        lastUpdate: '09.02.2024',
    },
    {
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
    },
    {
        title: 'Разновидности типа <span class="variable">Subject</span> и их различия',
        body: `<p>В RxJS имеется несколько разновидностей <code>Subject</code>:</p>
        <ul>
            <li><span class="attention">BehaviorSubject</span></li>
            <li><span class="attention">ReplaySubject</span></li>
            <li><span class="attention">AsyncSubject</span></li>
        </ul>
        <i class="subtitle">Subject</i>
        <p>
            RxJS <code>Subject</code> является разновидностью объектов
            <code>Observable</code>. Особенность <code>Subject</code> в том, что
            он может отправлять данные одновременно множеству "потребителей",
            которые могут регистрироваться уже в процессе исполнения
            <code>Subject</code>, в то время как исполнение стандартного
            <code>Observable</code> осуществляется уникально для каждого его
            вызова.
        </p>
        <pre><code class="language-typescript">const subject$ = new Subject();

subject$.subscribe((value) => console.log('Первая подписка:', value));
subject$.next(3);
subject$.subscribe((value) => console.log('Вторая подписка:', value));
subject$.next(9);</code></pre>
<p>В консоли мы увидим следующее:</p>
<pre><code class="language-typescript">Первая подписка: 3
Первая подписка: 9
Вторая подписка: 9</code></pre>
        <i class="subtitle">BehaviorSubject</i>
        <p>
            <code>BehaviorSubject</code> —
            <span class="attention">
                передает новому подписчику последнее значение и в качестве
                аргумента принимает начальное значение </span
            >.
        </p>
        <pre><code class="language-typescript">const behaviorSubject$ = new BehaviorSubject(5);

behaviorSubject$.subscribe((value) => console.log('Первая подписка:', value));
behaviorSubject$.subscribe((value) => console.log('Вторая подписка:', value));
behaviorSubject$.next(9);</code></pre>
<p>В консоли мы увидим следующее:</p>
<pre><code class="language-typescript">Первая подписка: 5
Вторая подписка: 5
Первая подписка: 9
Вторая подписка: 9</code></pre>
        <i class="subtitle">ReplaySubject</i>
        <p>
            <code>ReplaySubject</code> —
            <span class="attention">
                передает новому подписчику все предыдущие значения, принимаемый
                параметр — количество предыдущих значений </span
            >.
        </p>
        <pre><code class="language-typescript">const replaySubject$ = new ReplaySubject(2);

replaySubject$.next(3);
replaySubject$.next(6);
replaySubject$.next(9);

replaySubject$.subscribe((value) => console.log('Результат: ', value));</code></pre>
<p>В консоли мы увидим следующее:</p>
<pre><code class="language-typescript">Результат: 6
Результат: 9</code></pre>
        <i class="subtitle">AsyncSubject</i>
        <p>
            <code>AsyncSubject</code> —
            <span class="attention">
                передает новому подписчику последнее значение, но только после
                того, как будет вызван метод
            </span>
            <code>complete</code>.
        </p>
       <pre><code class="language-typescript">const asyncSubject$ = new AsyncSubject();

asyncSubject$.subscribe((value) => console.log('Результат: ', value));

asyncSubject$.next(3);
asyncSubject$.next(6);
asyncSubject$.next(9);

asyncSubject$.complete();</code></pre>
<p>В консоли мы увидим следующее:</p>
<pre><code class="language-typescript">Результат: 9</code></pre>`,
        selected: false,
        lastUpdate: '09.02.2024',
    },
    {
        title: 'Тип данных, у которого можно вызвать метод <span class="variable">pipe</span>',
        body: `<p>
            <span class="attention">Метод </span> <code>pipe</code>
            <span class="attention">
                применяется к данным, имеющих тип данных
            </span>
            <code>Observable</code>
            <span class="attention"> или его разновидности</span> (например,
            <code>Subject</code>).
        </p>
        <p>
            Причем внутри себя метод <code>pipe</code> принимает только те
            операторы, которые принимают <code>Observable</code> и возвращают
            <code>Observable</code>.
        </p>`,
        selected: false,
        lastUpdate: '09.02.2024',
    },
    {
        title: 'Подписка на события в конструкторе класса компонента',
        body: `<p>
            <span class="attention">
                В конструкторе класса не стоит делать какие-либо подписки на
                события</span
            >, потому что когда вызывается конструктор класса, то
            <span class="attention">
                инициализируется лишь класс будущего компонента, но не сам
                компонент</span
            >. Следовательно, в этот момент нет никакой гарантии, что данная
            подписка сработает.
        </p>
        <p>
            Подписки на события можно делать в методах класса или на любом этапе
            жизненного цикла компонента, за исключением <code>OnDestroy</code>,
            потому что какой смысл делать на что-то подписку, когда компонент
            уничтожается. Если только вы хотите создать себе лишних проблем с
            утечкой памяти.
        </p>`,
        selected: false,
        lastUpdate: '09.02.2024',
    },
    {
        title: 'Способы отписаться от подписки <span class="variable">subscribe</span>',
        body: `<p>
            Небольшой вступительный пример того, как делаются отписки от
            какого-либо события в нативном JavaScript:
        </p>
        <pre><code class="language-typescript">// создаем функцию, которая будет делать подписку на setTimeout
function timer(cb, timeout) {
    const timeoutId = setTimeout(cb, timeout);
    return () => clearInterval(timeoutId);
}
// замыкаем в переменную disposeTimer функцию, которая отменит подписку
const disposeTimer = timer(someFunction, 1000);
// отменяем подписку
disposeTimer();</code></pre>
        <p>Перейдем теперь непосредственно к RxJs.</p>
        <i class="subtitle">Сохранить подписку в переменную</i>
        <p>
            Самый простой способ отписаться от подписки - сохранить подписку в
            переменную и вызвать у нее метод <code>unsubscribe</code>, когда
            подписка нам уже не нужна:
        </p>
        <pre><code class="language-typescript">const timerSub: Subscription = timer(1000).subscribe();
timerSub.unsubscribe();</code></pre>
        <p>
            В примере выше нам необходимо следить за каждой подпиской. То есть,
            сохранять ее в переменную и затем где-то вызывать метод
            <code>unsubscribe</code>, что потом избавиться от подписки. Когда
            подписок много в компоненте, то становится очень много однообразного
            кода.
        </p>
        <i class="subtitle">takeUntil</i>
        <p>
            Другой способ, который находит более широкое на практике - это
            использовать <code>ReplaySubject</code> и оператор
            <code>takeUntil</code> для отписки сразу от всех подписок:
        </p>
        <pre><code class="language-typescript">onDestroy$: ReplaySubject = new ReplaySubject(1);

ngOnInit() {
	this.control.valueChanges
		.pipe(
			// switchMap отписывается от старого Observable и подписывается на новый, который приходит из сервиса
			// это, кстати, еще один способ отписаться от события
			switchMap((userId) => this.service.getUser(userId)),
			// берем данные пока компонент существует
			takeUntil(this.onDestroy$)
		)
		.subscribe();
}

ngOnDestroy() {
	// в момент уничтожения компонента избавляемся от подписок
	this.onDestroy$.next(null);
	this.onDestroy$.complete();
}</code></pre>
        <p>
            Вместо <code>ReplaySubject</code> можно использовать и просто
            <code>Subject</code>, но лучше все же использовать именно
            <code>ReplaySubject</code>, т.к. он сделает отправку последнего
            сообщения на случай, если подписка будет создана после уничтожения
            компонента.
        </p>`,
        selected: false,
        lastUpdate: '09.02.2024',
    },
    {
        title: 'Способы обработки ошибок в <span class="variable">RxJs</span>',
        body: `<p>
                Чтобы ваше приложение "не падало" из-за возможной ошибки
                (например, сервер не отвечает на ваш запрос), эти самые ошибки
                можно и нужно обрабатывать.
            </p>
            <p>В Angular обрабатывать ошибки можно несколькими способами:</p>
            <i class="subtitle">Оператор catchError</i>
            <p>
                <span class="attention">
                    Оператор <code>catchError</code> позволяет обработать
                    возможную ошибку без каких-либо дополнительных побочных
                    эффектов.
                </span>
            </p>
            <pre><code class="language-typescript">source = throwError('какая-то ошибка'); // имитируем ошибку

subscription = source.pipe(
		catchError(err => {
			console.log('отловлена ошибка:', err);
			return of('данные обработки ошибки'); // обязательно нужно вернуть данные типа Observable
		})
  	)
	.subscribe(
		val => console.log('next:', val),
		err => console.log('error:', err),
		() => console.log('completed:', 'поток завершен')
	);</code></pre>
            <p>
                В результате выполнения данного кода в консоли мы увидим
                следующее:
            </p>
            <pre><code class="language-typescript">// отловлена ошибка: какая-то ошибка
// next: данные обработки ошибки
// completed: поток завершен</code></pre>
            <i class="subtitle">Оператор retry</i>
            <p>
                <span class="attention"
                    >Оператор <code>retry</code> при возникновении ошибки будет
                    запрашивать данные повторно.</span
                >
                Количество повторных запросов передается параметров в метод:
            </p>
            <pre><code class="language-typescript">source = new Observable(subscriber => {
  	console.log('Следующая попытка');
 	subscriber.error('какая-то ошибка'); // имитируем ошибку
});

subscription = source.pipe(retry(2)) // в случае ошибки запрашиваем данные повторно 2 раза
	.subscribe(
		val => console.log('next:', val),
		err => console.log('error:', err),
		() => console.log('completed:', 'поток завершен')
	);</code></pre>
            <p>
                В примере выше мы намеренно у <code>source</code> имитируем
                ошибку и делаем поочередно еще 2 запроса на получение данных.
                Если за эти 2 запроса мы не получаем данные, тогда уже у
                <code>subscription</code> сработает метод <code>error</code>.
            </p>
            <pre><code class="language-typescript">// Следующая попытка
// Следующая попытка
// Следующая попытка
// error: какая-то ошибка</code></pre>
            <i class="subtitle">Оператор retryWhen</i>
            <p>
                Оператор <code>retryWhen</code> своего рода модификация
                оператора <code>retry</code>.
                <span class="attention"
                    >Данный оператор будет вызываться уже по определенному
                    условию - по результату выполнения другого
                    <code>Observable</code></span
                >:
            </p>
            <pre><code class="language-typescript">flag = true;

source = new Observable(subscriber => {
  console.log('имитация обращения к серверу');
  if (flag) {
    subscriber.error('какая-то ошибка');
    flag = false;
  } else {
    subscriber.next('успешный ответ сервера');
  }
});

obs = new Observable(subscriber => {
  console.log('подожди секундочку');
  setTimeout(() => subscriber.next('какие-то данные'), 1000);
});

subscription = source.pipe(retryWhen(err$ => obs))
  .subscribe( val => console.log('next:', val));</code></pre>
            <p>
                В примере выше, когда происходит ошибка, оператор
                <code>retryWhen</code> возвращает новый <code>Observable</code>,
                в данном случае это <code>obs</code>. Спустя 1 секунду
                <code>obs</code>
                возвращает какие-то данные и в этот момент оператор
                <code>retryWhen</code> вновь обратится к своему источнику, чтобы
                попытаться получить данные.
            </p>
            <p>Результат выполнения кода из примера выше:</p>
            <pre><code class="language-typescript">// имитация обращения к серверу
// подожди секундочку
// имитация обращения к серверу
// next: успешный ответ сервера</code></pre>
            <i class="subtitle">Оператор onErrorResumeNext</i>
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
        lastUpdate: '09.02.2024',
    },
    {
        title: 'Холодные и горячие <span class="variable">Observable</span>. Разница между ними. Подогрев и остужение <span class="variable">Observable</span>',
        body: `            <p>
                Холодные и горячие <code>Observable</code> - это потоки
                (стримы), имеющие лишь 1 принципиальное отличие:
                <span class="attention"
                    >Холодные <code>Observable</code> создают независимые потоки
                    под каждую подписку, а горячие разделяют поток друг с
                    другом.</span
                >
            </p>
            <p>
                Давайте рассмотрим более наглядно на примерах и попутно создадим
                свой собственный оператор для RxJs.
            </p>
            <p>Начнем с холодного <code>Observable</code>:</p>
            <pre><code class="language-typescript">export class AppComponent implements OnInit {
    ngOnInit(): void {
        const obs$ = fromTimestamp();
        obs$.subscribe(console.log);
        setTimeout(() => {
            obs$.subscribe(console.log);
        }, 2000);
    }
}

// имитация собственного оператора RxJs
const fromTimestamp = (): Observable<number> => {
    return new Observable((subscriber) => {
        const timestamp = Date.now(); // timestamp создается внутри Observable
        subscriber.next(timestamp);
    });
};</code></pre>
            <p>В результате в консоли мы увидим следующее:</p>
            <pre><code class="language-typescript">// 1685375651548
// 1685375651561</code></pre>
            <p>Как видите, для каждого потока свое значение.</p>
            <p>
                А теперь пример того, как сделать горячий
                <code>Observable</code>:
            </p>
            <pre><code class="language-typescript">export class AppComponent implements OnInit {
    ngOnInit(): void {
        const obs$ = fromTimestamp();
        obs$.subscribe(console.log);
        setTimeout(() => {
            obs$.subscribe(console.log);
        }, 2000);
    }
}

// имитация собственного оператора RxJs
const fromTimestamp = (): Observable<number> => {
	const timestamp = Date.now(); // timestamp создается снаружи Observable
    return new Observable((subscriber) => {
        subscriber.next(timestamp);
    });
};</code></pre>
            <p>В результате в консоли мы увидим следующее:</p>
            <pre><code class="language-typescript">// 1685375651588
// 1685375651588</code></pre>
            <p>В консоли получаем одинаковое значение, даже не смотря на то, что вторая подписка вызывается через 2 секунды. Это происходит потому, что мы ссылаемся на данные, которые находятся снаружи <code>Observable</code> и в момент инициализации <code>Observable</code> не создаются заново.</p>
			<i class="subtitle">Как подогреть холодный Observable?</i>
			<p>Забегая вперед, сразу хочется отметить, что перевести поток из холодного в горячий можно, а из горячего в холодный - нельзя. Почему - мы разобрали в примерах выше.</p>
			<p>Теперь давайте разберемся как подогреть поток. Для этого в RxJs есть различные механизмы:
				<ul>
					<li>Использовать <code>Subject</code> (или его разновидности) вместо <code>Observable</code>;</li>
					<li>Использовать оператор <code>shareReplay</code> из библиотеки RxJs (он под капотом использует <code>ReplaySubject</code>);</li>
					<li>Использовать оператор <code>share</code> или <code>publish</code> из библиотеки RxJs (они под капотом используют <code>Subject</code>);</li>
					<li>и т.д.</li>
				</ul>
			</p>
			<pre><code class="language-typescript">// пример использования оператора shareReplay
ngOnInit(): void {
	this.data$ = this.http.get<any[]>('https://...')
	.pipe(shareReplay())
	.subscribe()
}</code></pre>
<p>И теперь, если у вас где-то в разметке есть пайпы <code>async</code>, которые берут <code>data$</code>, то к серверу будет уходить всего лишь 1 запрос и, соответственно, при ответе сервера данные будут отдаваться всем подписчикам от одной и той же подписки.</p>`,
        selected: false,
        lastUpdate: '09.02.2024',
    },
    {
        title: 'Объединение несколько потоков в 1 и получение общего результата',
        body: `<p>
                В RxJs существуют различные операторы, позволяющие
                объединять/комбинировать потоки и получать из них данные.
                Давайте разберем их на примерах.
            </p>
            <i class="subtitle">Оператор concat</i>
            <i>Информация перенесена в раздел с операторами...</i>
            <i class="subtitle">Оператор merge</i>
            <i>Информация перенесена в раздел с операторами...</i>
            <i class="subtitle">Оператор zip</i>
            <i>Информация перенесена в раздел с операторами...</i>
            <i class="subtitle">Оператор combineLatest</i>
            <p>
                Оператор <code>combineLatest</code> похож по своему функционалу
                на оператор <code>zip</code>, но
                <span class="attention"
                    >в объединенном потоке он создает пару из последних (свежих)
                    событий, переданных в него потоков, перезатирая старые
                    события.</span
                >
            </p>
            <img
                src="assets/img/angular/rxjs/combineLatest.png"
                alt="оператор combineLatest"
            />
            <p>
                На картинке выше в первом потоке появляется событие "1", затем
                во втором потоке событие "А", в результате образуется пара "1А",
                но затем в первом потоке вновь происходит событие и старое
                событие "1" перезатирается новым событием "2". В результате мы
                получаем пару "2А" и т.д.
            </p>
            <p>Как это будет выглядеть в коде:</p>
            <pre><code class="language-typescript">export class SomeComponent {
    nextFunction(label: string, count: number, interval: number) {
        return (subscriber: Subscriber<unknown>) => {
            let i = 0;
            setInterval(() => {
                if (i < count) {
                    subscriber.next(label + ':' + i);
                    i++;
                } else {
                    subscriber.complete();
                }
            }, interval);
        };
    }

    first = new Observable(this.nextFunction('A', 3, 500));
    second = new Observable(this.nextFunction('B', 4, 200));

    result = combineLatest(this.first, this.second).subscribe((val) =>
        console.log('next:', val)
    );
}</code></pre>
            <p>Результат выполнения кода в консоли:</p>
            <pre><code class="language-typescript">// next: ['[A]:0', '[B]:1']
// next: ['[A]:0', '[B]:2']
// next: ['[A]:0', '[B]:3']
// next: ['[A]:1', '[B]:3']
// next: ['[A]:2', '[B]:3']</code></pre>
            <i class="subtitle">Оператор forkJoin</i>
            <p>
                Данный оператор объединяет потоки и комбинирует их последние
                значения. Но у него есть ключевая особенность - он срабатывает
                лишь в момент, когда переданные внутрь него потоки завершены.
            </p>
            <img
                src="assets/img/angular/rxjs/forkJoin.png"
                alt="оператор forkJoin"
            />
            <p>Как это будет выглядеть в коде:</p>
            <pre><code class="language-typescript">export class SomeComponent {
    nextFunction(label: string, count: number, interval: number) {
        return (subscriber: Subscriber<unknown>) => {
            let i = 0;
            setInterval(() => {
                if (i < count) {
                    subscriber.next(label + ':' + i);
                    i++;
                } else {
                    subscriber.complete();
                }
            }, interval);
        };
    }

    first = new Observable(this.nextFunction('A', 3, 500));
    second = new Observable(this.nextFunction('B', 4, 200));

    result = forkJoin(this.first, this.second).subscribe((val) =>
        console.log('next:', val)
    );
}</code></pre>
            <p>Результат выполнения кода в консоли:</p>
            <pre><code class="language-typescript">// next: ['[A]:2', '[B]:3']</code></pre>`,
        selected: false,
        lastUpdate: '09.02.2024',
    },
];
