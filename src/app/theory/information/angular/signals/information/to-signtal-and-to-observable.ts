import { IInfo } from 'src/app/shared/interfaces';

export const TO_SIGNAL_AND_TO_OBSERVABLE: IInfo = {
    title: 'Преобразование <span class="variable">Observable</span> в <span class="variable">Signal</span> и обратно',
    body: `<p>
                Ни одно крупное приложение не будет переписано на сигналы мгновенно. Годами мы строили сложную логику на
                RxJS, и нам нужен надежный мост между двумя мирами: <code>toSignal</code> и <code>toObservable</code>.
            </p>
            <i class="subtitle">toSignal(source$)</i>
            <p>
                <span class="attention"
                    ><code>toSignal</code> превращает <code>Observable</code> в <code>Signal</code></span
                >. Это основной инструмент для интеграции существующих сервисов или <code>HttpClient</code> запросов в
                новый, сигнальный мир.
            </p>
            <pre><code class="language-typescript">const myData$ = this.myService.getDataStream();

// Превращаем стрим в сигнал.
// initialValue обязателен, если стрим не синхронный (как большинство).
const myData = toSignal(myData$, { initialValue: [] });

// Теперь myData - это обычный readonly-сигнал.
// computed(() => myData().length);</code></pre>
            <i class="subtitle">toObservable(source)</i>
            <p>
                <code>toObservable</code> выполняет обратную операцию -
                <span class="attention">превращает <code>Signal</code> в <code>Observable</code></span
                >. Это полезно, когда часть вашего приложения все еще ожидает <code>Observable</code> (например, старый
                компонент или библиотека), а вы хотите передать ей значение из сигнала.
            </p>
            <pre><code class="language-typescript">const counter = signal(0);
const counter$ = toObservable(counter);

// Теперь можно использовать все операторы RxJS
counter$.pipe(debounceTime(300)).subscribe(val => ...);</code></pre>
            <p>
                Эти две функции обеспечивают плавный и поэтапный переход на сигналы, позволяя двум парадигмам
                сосуществовать в одном приложении.
            </p>`,
    selected: false,
    lastUpdate: '14.12.2025',
};
