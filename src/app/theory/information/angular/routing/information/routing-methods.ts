import { IInfo } from '@types';

export const ROUTING_METHODS: IInfo = {
    title: 'Способы перехода с одного адреса на другой',
    body: `<p>В Angular существует 2 способа перехода с одного маршрута на другой:</p>
            <ul>
                <li>
                    <span class="attention">с помощью директивы</span>
                    <code>routerLink</code>;
                </li>
                <li>
                    <span class="attention">с помощью сервиса</span>
                    <code>Router</code>.
                </li>
            </ul>
            <i class="subtitle">Директива routerLink</i>
            <p>
                Данная директива используется для перехода по заданным URL и может быть указана не только у тега
                <code>&lt;a></code>, но и у любого другого блочного HTML элемента.
            </p>
            <p>
                Совместно с <code>routerLink</code> используется директива <code>routerLinkActive</code>. Она
                <span class="attention">принимает название класса, который будет добавлен элементу</span>
                (у которого указана директива <code>routerLinkActive</code>) при активном URL, на который они ссылаются.
            </p>
			<pre><code class="language-html">&lt;a routerLink="/home" routerLinkActive="active">Home&lt;/a></code></pre>

            <p>
                В примере выше показан вариант задания маршрута через абсолютный путь. Но для директивы
                <code>routerLink</code> также возможны еще 2 варианта задания маршрута ссылки через относительные пути.
            </p>
            <ul>
                <li>
                    Если путь начинается с "<code>/</code>",
                    <span class="attention"> маршрутизатор ищет маршрут из корня приложения </span>
                    (1);
                </li>
                <li>
                    Если путь начинается с "<code>./</code>" или
                    <code>со слова сразу</code>,
                    <span class="attention"> маршрутизатор ищет дочерние элементы относительно текущего маршрута </span>
                    (2);
                </li>
                <li>
                    Если путь начинается с "<code>../</code>",
                    <span class="attention"
                        >маршрутизатор поднимается на один уровень вверх в дереве маршрутов и уже оттуда начинает поиск </span
                    >(3).
                </li>
            </ul>
<pre><code class="language-html">&lt;a routerLink="/home" routerLinkActive="active">Home&lt;/a> &lt;!-- (1) -->
&lt;a routerLink="./home" routerLinkActive="active">Home&lt;/a> &lt;!-- (2) -->
&lt;a routerLink="home" routerLinkActive="active">Home&lt;/a> &lt;!-- (2*) альтернативный вариант -->
&lt;a routerLink="../home" routerLinkActive="active">Home&lt;/a> &lt;!-- (3) --></code></pre>
            <i class="subtitle">Сервис Router</i>
            <p>
                Любое Angular приложение, реализующее внутри себя навигацию, имеет единственный экземпляр сервиса
                <code>Router</code>, который хранит полную конфигурацию маршрутов и реализует API для работы с
                навигацией.
            </p>
            <p>
                У данного сервиса есть метод <code>navigate</code>, с помощью которого мы можем изменять текущий URL
                страницы. В качестве первого параметра он принимает массив, где задается URL, а в качестве второго —
                объект с дополнительными параметрами запрашиваемого маршрута:
            </p>
<pre><code class="language-typescript">this.router.navigate(['profile', 6], {
	queryParams: { id: 6 }
})</code></pre>`,
    selected: false,
    lastUpdate: '08.02.2024',
};
