import { IQuestion } from '@types';

export const serviceQuestions: IQuestion[] = [
    {
        title: 'Сервисы в Angular',
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
        lastUpdate: '05.02.2024',
    },
    {
        title: 'Уровни определения сервисов в Angular',
        body: `<p>
            Angular сервисы
            <span class="attention">
                могут быть определены на уровне приложения, модуля или
                компонента.</span
            >
        </p>
		<pre><code class="language-typescript">@Injectable({providedIn: 'root'}) // уровень приложения</code></pre>
		<pre><code class="language-typescript">@Injectable({providedIn: SomeModule}) // уровень модуля</code></pre>
		<pre><code class="language-typescript">@Component({ 
	selector: 'app-some-component',
	providers: [SomeService], // уровень компонента
	template: '&lt;p>Какая-то HTML-разметка&lt;/p>'
})</code></pre>
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
<pre><code class="language-typescript">export class SomeModule {
	static forRoot(): ModuleWithProviders {
		return {
			ngModule: SomeModule, // модуль, в котором определяется метод
			providers: [SomeService], // сервисы, которые должны быть определены только в глобальном injector-е
		}
	}
}</code></pre>`,
        selected: false,
        lastUpdate: '05.02.2024',
    },
    // {
    //     title: '',
    //     body: ``,
    //     selected: false,
    // 	lastUpdate: '',
    // },
];
