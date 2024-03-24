import { IQuestion } from '@types';

export const othersQuestions: IQuestion[] = [
    // {
    //     title: '',
    //     body: ``,
    //     selected: false,
    // },
    {
        title: '<span class="variable">Angular CLI</span>. Определение',
        body: `<p>
            <span class="attention">Angular CLI</span> - это npm-модуль,
            реализующий интерфейс командной строки для создания, разработки и
            поддержки Angular-приложений. В системе желательно его устанавливать
            глобально.
        </p>`,
        selected: false,
        lastUpdate: '05.02.2024',
    },

    {
        title: 'Механизмы компиляции Angular-приложения',
        body: `<p>
            Начиная с 9-ой версии Angular, механизм
            <code>Angular compile</code> реализован в двух режимах:
        </p>
        <ul>
            <li>
                <span class="attention">JIT-компиляция</span>
                (Just-in-TIme) -
                <span class="attention"
                    >приложение компилируется в момент его запуска в
                    браузере</span
                >. Используется по умолчанию;
            </li>
            <li>
                <span class="attention">AOT-компиляция</span>
                (Ahead-of-Time) -
                <span class="attention"
                    >компиляция происходит в момент сборки приложения</span
                >.
            </li>
        </ul>
        <p>
            В режиме разработки рекомендуется использовать JIT-компиляцию, т.к.
            сборка приложения занимает меньше времени. Если же необходима
            итоговая версия приложения, то рекомендуется использовать
            AOT-компиляцию.
        </p>
        <p>
            При сборке приложения с флагом
            <code>--prod</code> AOT-компиляция используется по умолчанию.
        </p>`,
        selected: false,
        lastUpdate: '05.02.2024',
    },
    {
        title: 'Принцип работы механизма <span class="variable">Dependency injection</span>',
        body: `<p>
            <code>Dependency injection</code> (или сокращенно "DI") - это
            механизм, который позволяет, например, классу "А" просить объекты
            класса "Б" (или любого другого), но при этом их не создавать, потому
            что класс "А" не знает, что нужно передать в конструктор класса "Б"
            из данных, чтобы получить в ответ желаемое.
        </p>
        <p>
            Иначе говоря: <code>Dependency injection</code>
            <span class="attention">
                нужен для разворачивания зависимостей, которые присутствуют в
                конструкторе конкретного класса, а также чтобы код не отвечал за
                создание необходимых зависимостей, а делала это отдельная
                конфигурируемая система автоматически</span
            >.
        </p>
        <p>Пример использования "DI":</p>
        <pre><code class="language-typescript">constructor(private httpClient: HttpClient) {}</code></pre>
        <p>
            В каком-то классе запрашивается модуль <code>HttpClient</code> и
            записывается в приватную переменную <code>httpClient</code>.
        </p>
        <i class="subtitle"
            >Но как Angular понимает, что ему нужно сделать, когда мы добавляем
            в конструктор какую-либо зависимость?</i
        >
        <p>
            Если рассматривать пример с модулем <code>HttpClient</code>, то для
            его работы в модуль текущего компонента необходимо в
            конфигурационный объект декоратора
            <code>@NgModule()</code> импортировать модуль
            <code>HttpClientModule</code>, в котором уже и будет прописана
            инструкция того, как создать объект, который запрашивается в
            конструкторе примера выше.
        </p>
        <pre><code class="language-typescript">@NgModule({
	imports: [HttpClientModule]
})</code></pre>
        <i class="subtitle">Зачем так все усложнять?</i>
        <p>
            На самом деле это наоборот упрощает нам разработку. Потому что, если
            бы мы реализовывали логику <code>HttpClient</code> каждый раз
            самостоятельно, то нам бы приходилось писать очень много кода,
            потому что сам модуль <code>HttpClient</code> зависит от другого
            класса - <code>HttpHandler</code>.
        </p>
<pre><code class="language-typescript">export declare class HttpClient {
	constructor(private handler: HttpHandler);
}</code></pre>
        <p>
            Модуль <code>HttpHandler</code> уже ни от кого не зависит, поэтому в
            нем уже будет создаваться новый объект через ключевое слово
            <code>new</code>.
        </p>
        <p>
            После этого Angular возвращается обратно в <code>HttpClient</code> и
            видит, что <code>HttpHandler</code> уже создан. И так по цепочке
            вверх, пока не вернется в конструктор, где изначально и запрашивался
            данный модуль.
        </p>
        <p>
            Причем если мы будем вызывать <code>HttpClient</code> в другом
            компоненте этого же модуля, в нем уже будет определен
            <code>HttpHandler</code> и сам <code>HttpClient</code> уже будет
            готов в выдаче в запрашиваемом месте. Повторно вся эта цепочка
            сверху вниз и обратно проходить не будет.
            <span class="attention"
                >Полный проход осуществляется только первый раз, когда нужные
                составляющие еще не определены</span
            >.
        </p>`,
        selected: false,
        lastUpdate: '05.02.2024',
    },
    {
        title: 'Модуль в Angular. Определение',
        body: `<p>
            <span class="attention">Angular модуль</span> - это класс c
            декоратором <code>@NgModule()</code>, который служит изолирующей
            логической объединяющей структурой для компонентов, директив,
            фильтров и сервисов.
        </p>
        <pre><code class="language-typescript">@NgModule({
	declarations: [ParentComponent], // дочерние компоненты, директивы и пайпы
	imports: [SomeModule], // другие модули, используемые в текущем модуле
	providers: [SomeService], // импортирование в модуль необходимых сервисов приложения
	bootstrap: [ParentComponent], // имя главного компонента модуля
	exports: [SomeComponent], // экспортируемые компоненты, директивы и пайпы, которые могут быть использованы другими модулями
})
	
export class ParentModule {} // класс, к которому привязывается декоратор @NgModule()</code></pre>`,
        selected: false,
        lastUpdate: '24.03.2024',
    },
    {
        title: 'Подключение сторонних скриптов и стилей',
        body: `<p>
            Сторонние скрипты и стили должны подключаться в файле
            <span class="attention">angular.json</span>, а не в <span class="attention">index.html</span> как
            это делается в верстке, например.
        </p>
        <i class="subtitle"> Почему именно так? </i>
        <p>
            Важно, чтобы все настройки были в одном месте, а не размазаны по
            всему приложению. Причем файл <span class="attention">angular.json</span> как раз для этого и
            предназначен, т.к.
            <span class="attention">является главным конфигурационным файлом рабочего пространства Angular</span>.
        </p>`,
        selected: false,
        lastUpdate: '05.02.2024',
    },
    {
        title: '<span class="variable">Renderer 2</span>',
        body: ``,
        selected: false,
        lastUpdate: '',
        disabled: true,
    },
];
