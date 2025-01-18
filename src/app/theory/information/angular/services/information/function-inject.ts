import { IInfo } from 'src/app/shared/interfaces';

export const FUNCTION_INJECT: IInfo = {
    title: 'Функция <span class="variable">inject</span>',
    body: `<p>
                <span class="attention"
                    >Функция <code>inject</code> предназначена для внедрения зависимостей. Она позволяет делать это без
                    использования конструктора класса</span
                >.
            </p>
            <p>
                Ниже показан пример внедрения зависимости произвольного сервиса <code>SomeService</code> и произвольного
                значения <code>TOKEN</code> через функцию <code>inject</code>:
            </p>
            <pre><code class="language-typescript">@Component({
    selector: 'app-some',
    template: '',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [SomeService, { provide: TOKEN, useValue: 123 }],
})
export class SomeComponent {
    private someService = inject(SomeService);
    private token = inject(TOKEN);
}</code></pre>
            <p>Запись через конструктор для внедрения этих же зависимостей выглядела бы следующим образом:</p>
            <pre><code class="language-typescript">@Component({
    selector: 'app-some',
    template: '',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [SomeService, { provide: TOKEN, useValue: 123 }],
})
export class SomeComponent {
	constructor(
        private someService: SomeService,
        @Inject(TOKEN) private token: number
    ) {}
}</code></pre>
            <i class="subtitle">Дополнительные параметры</i>
            <p>
                Когда зависимости внедряются через конструктор, им можно указать декораторы <code>@Optional</code>,
                <code>@Self</code>, <code>@SkipSelf</code> и <code>@Host</code>. Функция <code>inject</code> тоже может
                их использовать. Только в данном случае они
                <span class="attention">указываются вторым параметром как свойство объекта</span>:
            </p>
            <pre><code class="language-typescript">private someService = inject(SomeService, { optional: true, skipSelf: true });
private token = inject(TOKEN, { self: true });</code></pre>
            <p>
                Здесь есть смысл их указывать только при значении <code>true</code>, т.к. значение
                <code>false</code> является значением по умолчанию.
            </p>`,
    selected: false,
    lastUpdate: '18.01.2025',
    footerLinks: [
        {
            path: 'https://youtu.be/GpRz_8EZvZY?t=14',
        },
    ],
};
