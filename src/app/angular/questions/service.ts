import { IQuestion } from '@types';

export const serviceQuestions: IQuestion[] = [
    {
        title: 'Зачем нужны сервисы в Angular?',
        body: `<p>
            <span class="attention">Сервисы</span> нужны для предоставления
            данных компонентам или хранения общего (глобального) состояния
            приложение.
        </p>
        <p>
            Причем в сервисах мы можем хранить не только запросы к серверу или
            какие-то общие данные, но и различные преобразования данных.
        </p>`,
        selected: false,
    },
    {
        title: 'Где можно импортировать сервисы в Angular?',
        body: `<p>
            Angular сервисы
            <span class="attention">
                могут быть определены на уровне приложения, модуля или
                компонента.</span
            >
        </p>
        <pre><code><span class="keyword">@Injectable</span><span class="punctuation">({</span><span class="key">providedIn</span>: <span class="string">'root'</span><span class="punctuation">})</span> <span class="comment">// уровень приложения</span>
			
<span class="keyword">@Injectable</span><span class="punctuation">({</span><span class="key">providedIn</span><span class="punctuation">:</span> <span class="class-name">SomeModule</span><span class="punctuation">})</span> <span class="comment">// уровень модуля</span>
			
<span class="keyword">@Component</span><span class="punctuation">({</span> <span class="comment">// уровень компонента</span>
	<span class="key">selector</span><span class="punctuation">:</span> <span class="string">'app-some-component'</span>,
	<span class="key">providers</span><span class="punctuation">: [</span><span class="service-name">SomeHttpService</span><span class="punctuation">]</span>,
	<span class="key">template</span><span class="punctuation">: '</span><span class="string"><</span><span class="string">div>Какая-то HTML-разметка<</span><span class="string">/div></span><span class="punctuation">'</span>
<span class="punctuation">})</span>
		</code></pre>
        <i class="subtitle">Уровень компонента</i>
        <p>
            Если сервис определен в компоненте, то при каждом ререндере он будет
            создаваться по-новому и будет доступен только для текущего
            компонента.
        </p>
        <i class="subtitle">Уровень модуля и приложения</i>
        <p>
            Если сервис определен в модуле, отличном от корневого, или в
            корневом модуле, то такой сервис попадает в глобальный
            <code>injector</code> (одна из частей механизма
            <code>Dependency injection</code>) и на все приложение создается
            один единственный его экземпляр. То есть, если в одном компоненте вы
            изменили какие-то данные в сервисе, то в другом компоненте при
            использовании этого же сервиса, вы получите измененные данные.
        </p>
        <p>
            Два экземпляра сервиса создается только в том случае, если есть
            модули, которые загружаются асинхронно. Причем количество
            асинхронных модулей неважно: один экземпляр сервиса будет создан для
            "обычных", другой - для подгружаемых асинхронно.
        </p>
        <p>
            Это происходит из-за того, что в момент загрузки, приложение не
            знает, будут ли созданы модули, для которых определена асинхронная
            инициализация. Поэтому они не включаются в глобальный
            <code>injector</code>, а при их инициализации создается их
            собственный <code>injector</code>.
        </p>
        <p>
            Но если необходимо, чтобы сервис существовал в единственном
            экземпляре независимо от реализации загрузки модулей в приложении,
            нужно использовать статический метод forRoot(), который определяется
            в классе модуля.
        </p>
        <pre><code><span class="export">export</span> <span class="keyword">class</span> <span class="module-name">SomeModule</span> <span class="punctuation">{</span>
	<span class="keyword">static</span> <span class="method">forRoot</span><span class="punctuation">():</span> <span class="type">ModuleWithProviders</span> <span class="punctuation">{</span>
		<span class="return">return</span> <span class="punctuation">{</span>
			<span class="key">ngModule</span>: <span class="module-name">SomeModule</span>, <span class="comment">// модуль, в котором определяется метод</span>
			<span class="key">providers</span>: <span class="punctuation">[</span><span class="service-name">SomeHttpService</span><span class="punctuation">]</span>, <span class="comment">// сервисы, которые должны быть определены только в глобальном injector-е</span>
		<span class="punctuation">}</span>
	<span class="punctuation">}</span>
<span class="punctuation">}</span></code></pre>`,
        selected: false,
    },
];
