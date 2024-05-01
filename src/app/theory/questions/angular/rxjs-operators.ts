import { IQuestion } from '@types';

export const rxjsOperatorsQuestions: IQuestion[] = [
    {
        chapter: 'Общие понятия',
    },
    {
        title: 'Определение операторов',
        body: `<p>
                <span class="attention">Операторы RxJS</span> - это одна из ключевых составляющих библиотеки RxJS. Они сильно
                <span class="attention"
                    >упрощают работу со сложным асинхронным кодом, используя при этом декларативный подход</span
                >, т.е., мы указываем какой результат хотим получить, вместо шагов, необходимых для его получения.
            </p>
            <p><span class="attention">Операторы представляют собой функции</span>.</p>
            <p>Существует два типа операторов:</p>
            <ul>
                <li><span class="attention">Операторы потока</span> (<code>Pipeable Operators</code>);</li>
                <li><span class="attention">Операторы создания</span> (<code>Creation Operators</code>).</li>
            </ul>`,
        selected: false,
        lastUpdate: '25.04.2024',
    },
    {
        title: 'Операторы потока (<span class="variable">Pipeable Operators</span>)',
        body: `<p>
                Операторы потока
                <span class="attention">
                    вызываются для уже существующих <code>Observable</code> и не меняют его, а возвращают новый
                    <code>Observable</code> с методом подписки, основанным на исходном <code>Observable</code></span
                >. Операторы данного типа по сути являются чистыми функциями, т.к. в качестве входных данных принимается
                один <code>Observable</code> и на выходе создается уже другой <code>Observable</code>.
            </p>
            <p>
                Этот тип операторов можно передать в поток <code>Observables</code>, с помощью метода <code>pipe</code>:
            </p>
            <pre><code class="language-typescript">someObservable.pipe(operator())</code></pre>
            <p>Пример:</p>
            <pre><code class="language-typescript">export class ForExamplesComponent {
    ngOnInit() {
        of(1, 2, 3)
            .pipe(map((x) => x * x))
            .subscribe((v) => console.log("Текущее значение: ", v));
    }
}</code></pre>
            <p>В итоге в консоли мы получим следующие данные:</p>
            <pre><code class="language-typescript">Текущее значение: 1
Текущее значение: 4
Текущее значение: 9</code></pre>
            <p>
                В примере выше оператором потока является оператор <code>map</code>, который изменяет входящий параметр
                заданным образом. В данном случае умножает элемент сам на себя и отдает этот результат далее в поток.
            </p>`,
        selected: false,
        lastUpdate: '25.04.2024',
    },
    {
        title: 'Операторы создания (<span class="variable">Creation Operators</span>)',
        body: `<p>
                Операторы создания
                <span class="attention">используются для создания новых <code>Observables</code></span
                >.
            </p>
            <p>
                Типичным примером данного типа операторов является оператор <code>interval</code>. Он принимает на входе
                временной интервал (а не <code>Observable</code>, в отличие от операторов потока) и в качестве выходного
                значения выдает уже <code>Observable</code>, который генерирует бесконечную последовательность
                возрастающих целых чисел с постоянным заданным интервалом времени:
            </p>
            <pre><code class="language-typescript">const observable = interval(1000);
// временной интервал задается в миллисекундах (1000 мс = 1 сек)</code></pre>
            <p>
                В данном примере генерация событий будет происходить каждую секунду, но, чтобы получать эти события,
                необходимо подписаться на данный <code>Observables</code>.
            </p>`,
        selected: false,
        lastUpdate: '25.04.2024',
    },
    {
        title: 'Функция <span class="variable">pipe</span>',
        body: `<p>
                Стоит также обратить внимание на функцию <code>pipe</code>. Она <span class="attention">может принимать внутрь себя сколько
                угодно операторов, которые перечисляются через запятую, причем они могут даже повторяться</span>. Тут также
                стоит учитывать, что операторы выполняются друг за другом в указанном в функции
                <code>pipe</code> порядке.
            </p>
            <pre><code class="language-typescript">export class ForExamplesComponent {
    ngOnInit() {
        of(1, 2, 3)
            .pipe(
                map((x) => x * x), // на выходе получаем значения 1, 4, 9
                filter((x) => x > 5), // берем значения, которые больше 5
                map((x) => x * x), // на выходе получаем значение 81
            )
            .subscribe((v) => console.log("Текущее значение: ", v));
    }
}</code></pre>
            <p>В итоге в консоли мы получим следующие данные:</p>
            <pre><code class="language-typescript">Текущее значение: 81</code></pre>`,
        selected: false,
        lastUpdate: '25.04.2024',
    },
    {
        title: 'Потоки высшего порядка (<span class="variable">Higher-order Observables</span>)',
        body: `<p>
                Обычно <code>Observables</code> чаще всего выдают обычные значения, такие как строки и числа, но бывают случаи, когда приходится обрабатывать <code>Observables</code> внутри
                <code>Observables</code>. В этом случае внешний <code>Observable</code> будет <code>Observable</code> более высокого порядка.
            </p>
            <p>
                Например, представьте, что у вас есть <code>Observable</code>, выдающий строки, которые представляют
                собой URL-адреса файлов, которые вы хотите посмотреть:
            </p>
            <pre><code class="language-typescript">const fileObservable = urlObservable.pipe(map((url) => http.get(url)));</code></pre>
            <p>
                <code>http.get()</code> возвращает <code>Observable</code> (возможно, строку или массив строк) для
                каждого отдельного URL-адреса. Теперь у вас есть <code>Observables</code> внутри <code>Observable</code>, т.е. внешний <code>Observable</code> - это
                <code>Observable</code> более высокого порядка.
            </p>
            <p>
                Чтобы работать с такими данными, обычно <span class="attention">прибегают к выравниванию или упрощению, путем преобразования
                <code>Observable</code> более высокого порядка в обычный <code>Observable</code></span>. В библиотеке RxJS тоже
                есть для этого соответствующие операторы:
            </p>
            <pre><code class="language-typescript">const fileObservable = urlObservable.pipe(
  	map((url) => http.get(url)),
	concatAll()
);</code></pre>
            <p>
                В примере выше оператор <code>concatAll</code> подписывается на каждый «внутренний»
                <code>Observable</code>, который выходит из «внешнего» <code>Observable</code>, и копирует все
                выдаваемые значения до тех пор, пока этот <code>Observable</code> не завершится, и перейдет к
                следующему. Таким образом, все значения объединяются и в итоге мы получает просто <code>Observable</code></span> с привычными типами данных внутри (примитивы, объекты или массивы).
            </p>`,
        selected: false,
        lastUpdate: '25.04.2024',
    },
    {
        title: 'Диаграммы операторов (<span class="variable">Marble diagrams</span>)',
        body: `<p>
                Чтобы объяснить, как работают операторы, текстовых описаний зачастую недостаточно, т.к. многие операторы
                связаны со временем. Поэтому диаграммы часто являются лучшим инструментом для этого. Они представляют
                собой визуальное представление того, как работают операторы, и включают в себя входные
                <code>Observable(s)</code>, оператор и его параметры, а также выходные <code>Observable(s)</code>.
            </p>
            <p>
                На диаграммах (картинках) ниже время течет вправо, и диаграмма описывает, как значения («мраморные
                шарики») выдаются при выполнении <code>Observable</code>.
            </p>
            <p>Для начала давайте разберем из чего вообще состоят данные диаграммы:</p>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                width="640"
                height="396"
                version="1.1"
                viewBox="0 0 640 396"
                style="max-height: none"
            >
                <title>marble-diagram-anatomy</title>
                <g id="Page-1" fill="none" fill-rule="evenodd" stroke="none" stroke-width="1">
                    <g id="marble-diagram-anatomy">
                        <g id="operator-multiplyByTen" transform="translate(21.907724, 168.854835)">
                            <rect
                                id="Rectangle-1"
                                width="468.757"
                                height="54.854"
                                x="0"
                                y="0"
                                stroke="white"
                                stroke-width="2"
                            />
                            <text
                                id="multiplyByTen"
                                fill="white"
                                font-family="SourceSansPro-Regular, Source Sans Pro"
                                font-size="21.648"
                                font-weight="normal"
                            >
                                <tspan x="169.187" y="35.221">multiplyByTen</tspan>
                            </text>
                        </g>
                        <g id="observable-output" transform="translate(21.907724, 249.101091)">
                            <g
                                id="arrow"
                                stroke="white"
                                stroke-linecap="square"
                                stroke-width="2"
                                transform="translate(0.000000, 6.772110)"
                            >
                                <path id="Line" d="M0.342158664,8 L468.572256,8" />
                                <path id="Line" d="M451.991595,0.338605479 L468.415211,8.46513697" />
                                <path
                                    id="Line"
                                    d="M451.991595,8.46513697 L468.415211,16.5916685"
                                    transform="translate(460.203403, 12.528403) scale(1, -1) translate(-460.203403, -12.528403)"
                                />
                            </g>
                            <g
                                id="error"
                                stroke="white"
                                stroke-linecap="square"
                                stroke-width="2"
                                transform="translate(273.726931, 4.740477)"
                            >
                                <path
                                    id="Line"
                                    d="M0.614437261,0.608056568 L21.5910648,21.36685"
                                    transform="translate(10.949077, 10.835375) scale(1, -1) translate(-10.949077, -10.835375)"
                                />
                                <path
                                    id="Line"
                                    d="M0.614437261,0.608056568 L21.5910648,21.36685"
                                    transform="translate(10.949077, 10.835375) scale(-1, -1) translate(-10.949077, -10.835375)"
                                />
                            </g>
                            <g id="marble-40" transform="translate(55.429704, 0.000000)">
                                <ellipse
                                    id="Oval-1"
                                    cx="15.397"
                                    cy="15.237"
                                    fill="#FF6946"
                                    stroke="white"
                                    stroke-width="2"
                                    rx="15.397"
                                    ry="15.237"
                                />
                                <text
                                    id="40"
                                    fill="#000"
                                    font-family="SourceSansPro-Regular, Source Sans Pro"
                                    font-size="16.236"
                                    font-weight="normal"
                                >
                                    <tspan x="6.986" y="20.74">40</tspan>
                                </text>
                            </g>
                            <g id="marble-60" transform="translate(128.651658, 0.000000)">
                                <ellipse
                                    id="Oval-1"
                                    cx="15.397"
                                    cy="15.237"
                                    fill="#FFCB46"
                                    stroke="white"
                                    stroke-width="2"
                                    rx="15.397"
                                    ry="15.237"
                                />
                                <text
                                    id="60"
                                    fill="#000"
                                    font-family="SourceSansPro-Regular, Source Sans Pro"
                                    font-size="16.236"
                                    font-weight="normal"
                                >
                                    <tspan x="6.986" y="20.74">60</tspan>
                                </text>
                            </g>
                        </g>
                        <g id="observable-input" transform="translate(21.907724, 112.354919)">
                            <g
                                id="arrow"
                                stroke="white"
                                stroke-linecap="square"
                                stroke-width="2"
                                transform="translate(0.000000, 6.772110)"
                            >
                                <path id="Line" d="M0.342158664,8 L468.572256,8" />
                                <path id="Line" d="M451.991595,0.338605479 L468.415211,8.46513697" />
                                <path
                                    id="Line"
                                    d="M451.991595,8.46513697 L468.415211,16.5916685"
                                    transform="translate(460.203403, 12.528403) scale(1, -1) translate(-460.203403, -12.528403)"
                                />
                            </g>
                            <path
                                id="Line"
                                stroke="white"
                                stroke-linecap="square"
                                stroke-width="2"
                                d="M427,0.338605479 L427,30.1358876"
                                transform="translate(427.000000, 15.237247) scale(1, -1) translate(-427.000000, -15.237247)"
                            />
                            <g id="marble-4" transform="translate(55.429704, 0.000000)">
                                <ellipse
                                    id="Oval-1"
                                    cx="15.397"
                                    cy="15.237"
                                    fill="#FF6946"
                                    stroke="white"
                                    stroke-width="2"
                                    rx="15.397"
                                    ry="15.237"
                                />
                                <text
                                    id="4"
                                    fill="#000"
                                    font-family="SourceSansPro-Regular, Source Sans Pro"
                                    font-size="16.236"
                                    font-weight="normal"
                                >
                                    <tspan x="11.02" y="20.063">4</tspan>
                                </text>
                            </g>
                            <g id="marble-6" transform="translate(128.651658, 0.000000)">
                                <ellipse
                                    id="Oval-1"
                                    cx="15.397"
                                    cy="15.237"
                                    fill="#FFCB46"
                                    stroke="white"
                                    stroke-width="2"
                                    rx="15.397"
                                    ry="15.237"
                                />
                                <text
                                    id="6"
                                    fill="#000"
                                    font-family="SourceSansPro-Regular, Source Sans Pro"
                                    font-size="16.236"
                                    font-weight="normal"
                                >
                                    <tspan x="11.02" y="20.063">6</tspan>
                                </text>
                            </g>
                            <g id="marble-a" transform="translate(269.621027, 0.000000)">
                                <ellipse
                                    id="Oval-1"
                                    cx="15.397"
                                    cy="15.237"
                                    fill="#3EA1CB"
                                    stroke="white"
                                    stroke-width="2"
                                    rx="15.397"
                                    ry="15.237"
                                />
                                <text
                                    id="a"
                                    fill="#000"
                                    font-family="SourceSansPro-Regular, Source Sans Pro"
                                    font-size="16.236"
                                    font-weight="normal"
                                >
                                    <tspan x="10.899" y="20.063">a</tspan>
                                </text>
                            </g>
                            <g id="marble-8" transform="translate(342.842981, 0.000000)">
                                <ellipse
                                    id="Oval-1"
                                    cx="15.397"
                                    cy="15.237"
                                    fill="#82D736"
                                    stroke="white"
                                    stroke-width="2"
                                    rx="15.397"
                                    ry="15.237"
                                />
                                <text
                                    id="8"
                                    fill="#000"
                                    font-family="SourceSansPro-Regular, Source Sans Pro"
                                    font-size="16.236"
                                    font-weight="normal"
                                >
                                    <tspan x="11.363" y="20.74">8</tspan>
                                </text>
                            </g>
                        </g>
                        <g id="legend-input-observable" transform="translate(8.000000, 10.000000)">
                            <path
                                id="Line"
                                stroke="#B7178C"
                                stroke-linecap="square"
                                stroke-width="2"
                                d="M28.0025541,18.0144658 C4.58101197,34.1485504 -12.2151614,60.0734258 11.4027261,102.132387"
                            />
                            <path
                                id="Line-decoration-1"
                                stroke="#B7178C"
                                stroke-linecap="square"
                                stroke-width="2"
                                d="M11.4027261,102.132387 L8.73055297,91.2466396 L3.49896033,94.1844003 L11.4027261,102.132387 Z"
                            />
                            <text
                                id="This-is-time-flowing"
                                fill="#B7178C"
                                font-family="SourceSansPro-Regular, Source Sans Pro"
                                font-size="13.087"
                                font-weight="normal"
                            >
                                <tspan x="36.815" y="13">Это время, текущее слева</tspan>
                                <tspan x="36.815" y="30">направо, показывающее</tspan>
                                <tspan x="36.815" y="47">выполнение входного</tspan>
                                <tspan x="36.815" y="64">Observable.</tspan>
                            </text>
                        </g>
                        <g id="legend-next" transform="translate(112.716977, 10.000000)">
                            <text
                                id="These-are-values-emi"
                                fill="#B7178C"
                                font-family="SourceSansPro-Regular, Source Sans Pro"
                                font-size="13.087"
                                font-weight="normal"
                            >
                                <tspan x="114.362" y="13">Это значения, происходящие</tspan>
                                <tspan x="131.304" y="30">в Observable.</tspan>
                            </text>
                            <path
                                id="Line"
                                stroke="#B7178C"
                                stroke-linecap="square"
                                stroke-width="2"
                                d="M128.850968,41.3513873 L0.409050692,98.6701421"
                            />
                            <path
                                id="Line-decoration-1"
                                stroke="#B7178C"
                                stroke-linecap="square"
                                stroke-width="2"
                                d="M0.409050692,98.6701421 L11.4941232,97.0084658 L9.04897888,91.5292989 L0.409050692,98.6701421 Z"
                            />
                            <path
                                id="Line"
                                stroke="#B7178C"
                                stroke-linecap="square"
                                stroke-width="2"
                                d="M147.6673,41.3513873 L67.4933642,97.0324634"
                            />
                            <path
                                id="Line-decoration-1"
                                stroke="#B7178C"
                                stroke-linecap="square"
                                stroke-width="2"
                                d="M67.4933642,97.0324634 L78.0752001,93.3358772 L74.652629,88.4077937 L67.4933642,97.0324634 Z"
                            />
                            <path
                                id="Line"
                                stroke="#B7178C"
                                stroke-linecap="square"
                                stroke-width="2"
                                d="M186.936166,38.0760299 L193.480977,96.213624"
                            />
                            <path
                                id="Line-decoration-1"
                                stroke="#B7178C"
                                stroke-linecap="square"
                                stroke-width="2"
                                d="M193.480977,96.213624 L195.253973,85.145811 L189.291635,85.8170183 L193.480977,96.213624 Z"
                            />
                            <path
                                id="Line"
                                stroke="#B7178C"
                                stroke-linecap="square"
                                stroke-width="2"
                                d="M204.934397,36.4383512 L259.747189,97.0324634"
                            />
                            <path
                                id="Line-decoration-1"
                                stroke="#B7178C"
                                stroke-linecap="square"
                                stroke-width="2"
                                d="M259.747189,97.0324634 L254.726883,87.0106607 L250.277287,91.0357186 L259.747189,97.0324634 Z"
                            />
                        </g>
                        <g id="legend-complete" transform="translate(445.684240, 10.000000)">
                            <text
                                id="This-vertical-line-r"
                                fill="#B7178C"
                                font-family="SourceSansPro-Regular, Source Sans Pro"
                                font-size="13.087"
                                font-weight="normal"
                            >
                                <tspan x="22.75" y="13">Эта вертикальная линия</tspan>
                                <tspan x="22.75" y="30">служит уведомлением</tspan>
                                <tspan x="22.75" y="47">о «завершении» и указывает,</tspan>
                                <tspan x="22.75" y="64">что Observable завершился</tspan>
                                <tspan x="22.75" y="81">успешно.</tspan>
                            </text>
                            <path
                                id="Line"
                                stroke="#B7178C"
                                stroke-linecap="square"
                                stroke-width="2"
                                d="M13.937921,15.327927 C-0.0407050176,25.019385 -2.50011646,51.8647248 2.86335484,88.0252305"
                            />
                            <path
                                id="Line-decoration-1"
                                stroke="#B7178C"
                                stroke-linecap="square"
                                stroke-width="2"
                                d="M2.86335484,88.0252305 L4.24632558,76.9019489 L-1.6887438,77.7822622 L2.86335484,88.0252305 Z"
                            />
                        </g>
                        <g id="legend-operator" transform="translate(495.588425, 135.282421)">
                            <text
                                id="This-box-indicates-t"
                                fill="#B7178C"
                                font-family="SourceSansPro-Regular, Source Sans Pro"
                                font-size="13.087"
                                font-weight="normal"
                            >
                                <tspan x="8.024" y="44.116">В этом поле указан</tspan>
                                <tspan x="8.024" y="61.116">оператор, который</tspan>
                                <tspan x="8.024" y="78.116">принимает входной</tspan>
                                <tspan x="8.024" y="95.116">Observable (сверху)</tspan>
                                <tspan x="8.024" y="112.116">для создания</tspan>
                                <tspan x="8.024" y="129.116">выходного Observable</tspan>
                                <tspan x="8.024" y="146.116">(ниже). Текст</tspan>
                                <tspan x="8.024" y="163.116">внутри поля</tspan>
                                <tspan x="8.024" y="180.116">показывает характер</tspan>
                                <tspan x="8.024" y="197.116">преобразования.</tspan>
                            </text>
                            <path
                                id="Line"
                                stroke="#B7178C"
                                stroke-linecap="square"
                                stroke-width="2"
                                d="M73.4969349,23.2939021 C73.4969349,4.28895214 27.5472993,-17.7526557 0.0451347018,23.293903"
                            />
                            <path
                                id="Line-decoration-1"
                                stroke="#B7178C"
                                stroke-linecap="square"
                                stroke-width="2"
                                d="M0.0451347018,23.293903 L8.54901533,15.9915736 L3.56444995,12.651797 L0.0451347018,23.293903 Z"
                            />
                        </g>
                        <g id="legend-output-observable" transform="translate(16.181014, 281.035826)">
                            <text
                                id="This-Observable-is-t"
                                fill="#B7178C"
                                font-family="SourceSansPro-Regular, Source Sans Pro"
                                font-size="13.087"
                                font-weight="normal"
                            >
                                <tspan x="26.179" y="50.667">Этот Observable</tspan>
                                <tspan x="26.179" y="67.667">является результатом</tspan>
                                <tspan x="26.179" y="84.667">вызова оператора.</tspan>
                            </text>
                            <path
                                id="Line"
                                stroke="#B7178C"
                                stroke-linecap="square"
                                stroke-width="2"
                                d="M17.5231885,54.8015884 C5.81341019,50.2369613 -11.4758405,28.1704708 11.8624701,0.409419677"
                            />
                            <path
                                id="Line-decoration-1"
                                stroke="#B7178C"
                                stroke-linecap="square"
                                stroke-width="2"
                                d="M11.8624701,0.409419677 L2.61633476,6.7457421 L7.20901328,10.6067399 L11.8624701,0.409419677 Z"
                            />
                        </g>
                        <g id="legend-error" transform="translate(250.976111, 280.216987)">
                            <text
                                id="This-X-represents-an"
                                fill="#B7178C"
                                font-family="SourceSansPro-Regular, Source Sans Pro"
                                font-size="13.087"
                                font-weight="normal"
                            >
                                <tspan x="21.271" y="35.928">Этот "X" означает ошибку,</tspan>
                                <tspan x="21.271" y="52.928">т.е. Observable завершился</tspan>
                                <tspan x="21.271" y="69.928">некорректно. Дальнейшие события</tspan>
                                <tspan x="21.271" y="86.928">или корректное завершение</tspan>
                                <tspan x="21.271" y="103.928">потока не будут реализованы.</tspan>
                            </text>
                            <path
                                id="Line"
                                stroke="#B7178C"
                                stroke-linecap="square"
                                stroke-width="2"
                                d="M11.4811397,57.3948212 C-6.70631725,51.504022 -3.32492938,12.1184845 25.7701936,0.409419677"
                            />
                            <path
                                id="Line-decoration-1"
                                stroke="#B7178C"
                                stroke-linecap="square"
                                stroke-width="2"
                                d="M25.7701936,0.409419677 L14.6310746,1.65843022 L16.8711257,7.22459325 L25.7701936,0.409419677 Z"
                            />
                        </g>
                    </g>
                </g>
            </svg>
            <p>Для операторов библиотеки RxJS есть</p>
            <p>Также есть различные другие полезные ресурсы по операторам библиотеки RxJS:</p>
            <ul>
                <li>
                    <a href="https://rxmarbles.com/" target="_blank"><span class="attention">RxJS Marbles</span></a> -
                    здесь почти для каждого оператора можно двигать "шарики" и смотреть как это влияет на итоговый
                    <code>Observable</code>;
                </li>
                <li>
                    <a href="https://rxjstutorial.com/docs/join-creation-operators/merge/" target="_blank"
                        ><span class="attention">RxJS tutorial</span></a
                    >
                    - здесь для каждого оператора показан принцип его действия в анимированном виде, т.е., выполняется
                    условная симуляция его работы.
                </li>
            </ul>`,
        selected: false,
        lastUpdate: '26.04.2024',
    },
    { chapter: 'Операторы создания (<span class="variable">Creation Operators</span>)' },
    {
        title: '<span class="variable">from</span>',
        body: `<p>
                <span class="attention"
                    >Оператор <code>from</code> создает <code>Observables</code> из любого типа данных, который может
                    быть в конечном итоге проитерирован как массив</span
                >.
            </p>
            <p>
                В целом он похож на оператор <code>of</code>, только работает с итерируемыми типами данных. Каждый
                итерируемый элемент друг за другом отправляется в созданный данным оператором поток.
            </p>
            <img src="assets/img/angular/rxjs/from.png" alt="оператор from" />
            <p>Пример с массивом:</p>
            <pre><code class="language-typescript">export class ForExamplesComponent {
    ngOnInit() {
        const numbers = [1, 2, 3];
        const observableNumbers = from(numbers);
        observableNumbers.subscribe(console.log);
    }
}</code></pre>
            <p>В консоли мы увидим следующее:</p>
            <pre><code class="language-typescript">1
2
3</code></pre>
            <p>Пример со строкой:</p>
            <pre><code class="language-typescript">export class ForExamplesComponent {
    ngOnInit() {
        const string = 'Привет';
        const observableString = from(string);
        observableString.subscribe(console.log);
    }
}</code></pre>
            <p>В консоли мы увидим следующее:</p>
            <pre><code class="language-typescript">П
р
и
в
е
т</code></pre>
            <p>Пример создания <code>Observable</code> из метода:</p>
            <pre><code class="language-typescript">export class ForExamplesComponent {
    ngOnInit() {
        const observableFromFunction = from(this.generateNumbers());
        observableFromFunction.subscribe(console.log);
    }

    generateNumbers() {
        return [1, 2, 3];
    }
}</code></pre>
            <p>В консоли мы увидим следующее:</p>
            <pre><code class="language-typescript">1
2
3</code></pre>
            <p>Пример с промисом:</p>
            <pre><code class="language-typescript">export class ForExamplesComponent {
    ngOnInit() {
        const observablePromise = from(new Promise((resolve) => resolve('Привет')));
        observablePromise.subscribe((val) => console.log(val));
    }
}</code></pre>
            <p>В консоли мы увидим следующее:</p>
            <pre><code class="language-typescript">Привет</code></pre>
            <p>Пример с коллекцией:</p>
            <pre><code class="language-typescript">export class ForExamplesComponent {
    ngOnInit() {
        const map = new Map();
        map.set(1, 'Привет');
        map.set(2, 'Пока');

        const mapSource = from(map);
        mapSource.subscribe(console.log);
    }
}</code></pre>
            <p>В консоли мы увидим следующее:</p>
            <pre><code class="language-typescript">[1, 'Привет']
[2, 'Пока']</code></pre>
            <p><span class="attention">Данный оператор завершает поток, когда заканчиваются элементы</span>:</p>
            <pre><code class='language-typescript'>export class ForExamplesComponent {
    ngOnInit() {
        const numbers = [1, 2, 3];
        const observableNumbers = from(numbers);
        observableNumbers.subscribe({
            next: (value) => console.log('Текущее значение: ', value),
            error: (error) => console.log('Ошибка: ', error),
            complete: () => console.log('Поток завершен'),
        });
    }
}</code></pre>
            <p>В консоли мы увидим следующее:</p>
            <pre><code class="language-typescript">Текущее значение: 1
Текущее значение: 2
Текущее значение: 3
Поток завершен!</code></pre>`,
        selected: false,
        lastUpdate: '01.05.2024',
    },
    {
        title: '<span class="variable">fromEvent</span>',
        body: `<p>
                <span class="attention"
                    >Оператор <code>fromEvent</code> используется для создания <code>Observable</code> из событий,
                    происходящих в DOM-дереве</span
                >, таких как клик мыши, нажатие клавиш и т.д.
            </p>
            <img src="assets/img/angular/rxjs/fromEvent.png" alt="оператор fromEvent" />
            <p>
                У данного оператора есть 2 обязательных параметра (также есть еще 2 опциональных параметра, но они
                используются крайне редко):
            </p>
            <ul>
                <li>
                    <span class="attention">target</span> - задает элемент DOM-дерева или
                    глобальный объект (например, <code>document</code>), у которого необходимо отслеживать происходящие
                    в нем события;
                </li>
                <li>
                    <span class="attention">eventName</span> - задает конкретный тип
                    прослушиваемого события. Строковый тип данных.
                </li>
            </ul>
            <p>Пример с кликом по глобальному объекту <code>document</code>:</p>
            <pre><code class='language-typescript'>export class ForExamplesComponent {
    ngOnInit() {
        const clicks = fromEvent(document, 'click');
        clicks.subscribe(console.log);
    }
}
</code></pre>
            <p>В консоли мы увидим объект с типом <code>PointerEvent</code>:</p>
            <pre><code class='language-typescript'>PointerEvent {...}</code></pre>
            <p>
                В примере выше, внутри "<code>...</code>" будет содержаться вся информация о произошедшем на странице
                событии клика.
            </p>
            <p>Пример с кликом по найденному элементу DOM-дерева с помощью метода <code>querySelector</code>:</p>
            <pre><code class='language-typescript'>export class ForExamplesComponent {
    ngOnInit() {
        const body = document.querySelector('body');

        if (body) {
            const clicks = fromEvent(body, 'click');
            clicks.subscribe(console.log);
        }
    }
}</code></pre>
            <p>
                В консоли мы также увидим объект с типом <code>PointerEvent</code>, но данные в нем будут уже другие, т.к.
                координаты клика, с высокой долей вероятности, будут отличаться:
            </p>
            <pre><code class='language-typescript'>PointerEvent {...}</code></pre>
			<p><span class="attention">Данный оператор самостоятельно не завершает поток</span>, поэтому необходимо не забывать завершать поток при уничтожении компонента, в котором он используется, или при выполнении любой другой необходимой логики.</p>`,
        selected: false,
        lastUpdate: '30.04.2024',
        footerText: ['Дополнительный материал', 'Дополнительные материалы'],
        footerLinks: [
            {
                title: 'Анимация работы оператора',
                path: 'https://rxjstutorial.com/docs/creation-operators/fromEvent/',
            },
        ],
    },
    {
        title: '<span class="variable">of</span>',
        body: `<p>
                <span class="attention"
                    >Оператор <code>of</code> создает <code>Observables</code> из любого типа данных</span
                >, будь то строка, массив, объект или промис.
            </p>
            <img src="assets/img/angular/rxjs/of.png" alt="оператор of" />
            <p>Пример:</p>
            <pre><code class="language-typescript">export class ForExamplesComponent {
    someObservable: Observable&lt;any> = of(1, 'текст', ['123', 0]);

    ngOnInit() {
        this.someObservable.subscribe(console.log);
    }
}</code></pre>
            <p>В консоли мы увидим следующее:</p>
            <pre><code class='language-typescript'>1
текст
['123', 0]</code></pre>
            <p>
                Из примера выше видно, что оператору <code>of</code> все равно с каким типом данных работать. Он каждый
                элемент, находящийся внутри его круглых скобок, отправляет в созданный им поток.
            </p>
            <p><span class="attention">Данный оператор завершает поток, когда заканчиваются элементы</span>:</p>
            <pre><code class='language-typescript'>export class ForExamplesComponent {
		someObservable: Observable&lt;any> = of(1, 'текст', ['123', 0]);
	
		ngOnInit() {
			this.someObservable.subscribe({
				next: (value) => console.log('Текущее значение: ', value),
				error: (error) => console.log('Ошибка: ', error),
				complete: () => console.log('Поток завершен'),
			});
		}
	}</code></pre>
            <p>В консоли мы увидим следующее:</p>
            <pre><code class="language-typescript">Текущее значение: 1
Текущее значение: текст
Текущее значение: ['123', 0]
Поток завершен!</code></pre>`,
        selected: false,
        lastUpdate: '29.04.2024',
        footerText: ['Дополнительный материал', 'Дополнительные материалы'],
        footerLinks: [
            {
                title: 'Анимация работы оператора',
                path: 'https://rxjstutorial.com/docs/creation-operators/of/',
            },
        ],
    },
    // {
    //     title: '',
    //     body: ``,
    // 	selected: false,
    // 	lastUpdate: ''
    // },
    { chapter: 'Операторы объединения (<span class="variable">Join Creation Operators</span>) для созданных потоков' },
    {
        title: '<span class="variable">combineLatest</span>',
        body: `1`,
        selected: false,
        lastUpdate: '16.04.2024',
        disabled: true,
        footerText: ['Дополнительный материал', 'Дополнительные материалы'],
        footerLinks: [
            {
                title: 'Подвигать шарики',
                path: 'https://rxmarbles.com/#combineLatest',
            },
            {
                title: 'Анимация работы оператора',
                path: 'https://rxjstutorial.com/docs/join-creation-operators/combineLatest/',
            },
        ],
    },
    {
        title: '<span class="variable">concat</span>',
        body: `<p>
                Оператор <code>concat</code>
                <span class="attention"
                    >используется для последовательного объединения двух или более <code>Observable</code> в один</span
                >.
            </p>
            <img src="assets/img/angular/rxjs/concat.png" alt="оператор concat" />
            <p>
                Как видно на картинке, события второго потока добавляются после событий первого потока. Причем неважно,
                что второй поток завершается раньше, оператор <code>concat</code>
                <span class="attention">
                    будет ждать когда завершится первый поток и только после этого перейдет к следующему</span
                >, и т.д. И после того, как оператор <code>concat</code> получает все потоки,
                <span class="attention">он их объединяет в порядке передачи внутрь оператора и завершается</span>.
            </p>
            <p>
                Оператор <code>concat</code> следует использовать, когда нужно сначала обработать события от одного
                источника, а затем от другого, и порядок событий важен. Это может быть полезно, например, при выполнении
                последовательных запросов к серверу или при выполнении асинхронных операций в определенном порядке.
            </p>
            <p>Пример:</p>
            <pre><code class="language-typescript">export class SomeComponent {
    first = new Observable((subscriber) => {
        setTimeout(() => {
            subscriber.next('Событие из первого потока');
            subscriber.complete();
        }, 500);
    });

    second = new Observable((subscriber) => {
        setTimeout(() => {
            subscriber.next('Событие из второго потока');
            subscriber.complete();
        }, 200);
    });

    result = concat(this.first, this.second).subscribe(console.log);
}</code></pre>
            <p>Результат выполнения кода в консоли:</p>
            <pre><code class="language-typescript">Событие из первого потока
Событие из второго потока</code></pre>
            <p>
                Как видите, время, когда происходят события не учитывается, т.к. в консоли событие из первого потока
                появляется раньше, несмотря на то, что во втором потоке задержка в функции <code>setTimeout</code> имеет
                меньшую величину, чем в первом.
            </p>`,
        selected: false,
        lastUpdate: '16.04.2024',
        footerText: ['Дополнительный материал', 'Дополнительные материалы'],
        footerLinks: [
            {
                title: 'Подвигать шарики',
                path: 'https://rxmarbles.com/#concat',
            },
            {
                title: 'Анимация работы оператора',
                path: 'https://rxjstutorial.com/docs/join-creation-operators/concat/',
            },
        ],
    },
    {
        title: '<span class="variable">forkJoin</span>',
        body: `1`,
        selected: false,
        lastUpdate: '16.04.2024',
        disabled: true,
        footerText: ['Дополнительный материал', 'Дополнительные материалы'],
        footerLinks: [
            {
                title: 'Анимация работы оператора',
                path: 'https://rxjstutorial.com/docs/join-creation-operators/forkJoin/',
            },
        ],
    },
    {
        title: '<span class="variable">merge</span>',
        body: `<p>
                Оператор <code>merge</code>
                <span class="attention"
                    >используется для объединения двух или более <code>Observable</code> в один поток. Он объединяет
                    элементы всех источников в том порядке, в котором они были созданы</span
                >.
            </p>
            <img src="assets/img/angular/rxjs/merge.png" alt="оператор concat" />
            <p>
                Оператор <code>merge</code> следует использовать, когда нужно обрабатывать события от нескольких
                источников данных одновременно, без ожидания завершения одного источника перед переходом к следующему.
                Это может быть полезно, например, при обработке нескольких запросов к серверу или при работе с
                несколькими компонентами, которые могут генерировать события независимо друг от друга.
            </p>
            <p>Пример:</p>
            <pre><code class="language-typescript">export class SomeComponent {
    first = new Observable((subscriber) => {
        setTimeout(() => {
            subscriber.next('Событие из первого потока');
            subscriber.complete();
        }, 500);
    });

    second = new Observable((subscriber) => {
        setTimeout(() => {
            subscriber.next('Событие из второго потока');
            subscriber.complete();
        }, 200);
    });

    result = merge(this.first, this.second).subscribe(console.log);
}</code></pre>
            <p>Результат выполнения кода в консоли:</p>
            <pre><code class="language-typescript">Событие из второго потока
Событие из первого потока</code></pre>
            <p>
                Как видите, теперь учитывается время события, когда оно происходит, т.к. в консоли событие из второго
                потока появляется раньше.
            </p>
			<p><span class="attention">Данный оператор самостоятельно не завершает поток</span>, поэтому необходимо не забывать завершать поток при уничтожении компонента, в котором он используется, или при выполнении любой другой необходимой логики.</p>`,
        selected: false,
        lastUpdate: '16.04.2024',
        footerText: ['Дополнительный материал', 'Дополнительные материалы'],
        footerLinks: [
            {
                title: 'Подвигать шарики',
                path: 'https://rxmarbles.com/#merge',
            },
            {
                title: 'Анимация работы оператора',
                path: 'https://rxjstutorial.com/docs/join-creation-operators/merge/',
            },
        ],
    },
    {
        title: '<span class="variable">partition</span>',
        body: `1`,
        selected: false,
        lastUpdate: '16.04.2024',
        footerText: ['Дополнительный материал', 'Дополнительные материалы'],
        disabled: true,
        footerLinks: [
            {
                title: 'Анимация работы оператора',
                path: 'https://rxjstutorial.com/docs/join-creation-operators/partition/',
            },
        ],
    },
    {
        title: '<span class="variable">race</span>',
        body: `1`,
        selected: false,
        lastUpdate: '',
        disabled: true,
        footerText: ['Дополнительный материал', 'Дополнительные материалы'],
        footerLinks: [
            {
                title: 'Подвигать шарики',
                path: 'https://rxmarbles.com/#race',
            },
            {
                title: 'Анимация работы оператора',
                path: 'https://rxjstutorial.com/docs/join-creation-operators/race/',
            },
        ],
    },
    {
        title: '<span class="variable">zip</span>',
        body: `<p>
                Оператор <code>zip</code>
                <span class="attention"
                    >объединяет 2 или более потоков, если в каждом из переданных потоков есть доступные события для
                    создания пары</span
                >.
            </p>
            <img src="assets/img/angular/rxjs/zip.png" alt="оператор zip" />
            <p>
                На картинке выше есть 2 потока. В первом потоке происходит событие "1", но оно не попадет в объединенный
                поток, пока в другом потоке не произойдет событие "А", то есть, пока не создастся пара.
            </p>
            <p>Пример:</p>
            <pre><code class="language-typescript">export class SomeComponent {
    first = of('A', 'B', 'C');
    second = of(1, 2, 3, 4);

    result = zip(this.first, this.second).subscribe(console.log);
}</code></pre>
            <p>Результат выполнения кода в консоли:</p>
            <pre><code class="language-typescript">['A', 1]
['B', 2]
['C', 3]</code></pre>
            <p>
                В примере выше во втором потоке для элемента "<code>4</code>" не нашлось в итоге пары из первого потока,
                поэтому его значение и не вывелось в консоли.
            </p>
			<p><span class="attention">Данный оператор самостоятельно не завершает поток</span>, поэтому необходимо не забывать завершать поток при уничтожении компонента, в котором он используется, или при выполнении любой другой необходимой логики.</p>
			<p>В примере выше поток самостоятельно завершится благодаря оператору <code>of</code>, т.к. он сам завершает поток, когда кончаются в нем элементы.</p>`,
        selected: false,
        lastUpdate: '16.04.2024',
        footerText: ['Дополнительный материал', 'Дополнительные материалы'],
        footerLinks: [
            {
                title: 'Подвигать шарики',
                path: 'https://rxmarbles.com/#zip',
            },
            {
                title: 'Анимация работы оператора',
                path: 'https://rxjstutorial.com/docs/join-creation-operators/zip/',
            },
        ],
    },
    { chapter: 'Операторы преобразования (<span class="variable">Transformation Operators</span>)' },
    {
        title: '<span class="variable">concatMap</span>',
        body: `<p>
                <span class="attention">
                    Оператор <code>concatMap</code> используется преобразования элементов одного потока
                    <code>Observable</code> в другой таким образом, чтобы результаты были доставлены последовательно,
                    один за другим</span
                >. Это означает, что результаты второго <code>Observable</code> ("<code>B</code>") будут ожидать
                завершения первого ("<code>A</code>") перед тем, как начать обрабатывать следующий элемент.
            </p>
            <img src="assets/img/angular/rxjs/concatMap.png" alt="оператор concatMap" />
            <p>
                <span class="attention">Основная цель <code>concatMap</code> заключается в том, чтобы преобразовать поток данных, не теряя при
                этом их упорядоченность</span>. Это особенно полезно, когда идет работа с асинхронными операциями, такими как
                HTTP-запросы, где нужно дождаться завершения одной операции, прежде чем начинать другую.
            </p>
			<p>Пример использования <code>concatMap</code>:</p>
            <pre><code class="language-typescript">export class ForExamplesComponent {
    ngOnInit() {
        of('A', 'B', 'C')
            .pipe(
                concatMap((value) => {
                    return of(value).pipe(
                        delay(1000), // создаем искусственную задержку в 1 секунду
                        map((currentValue) => 'Текущее значение потока: ' + currentValue),
                    );
                }),
            )
            .subscribe(console.log);
    }
}</code></pre>
            <p>В итоге в консоли мы увидим следующий результат:</p>
            <pre><code class="language-typescript">Текущее значение потока: А
Текущее значение потока: В // после выполнения потока А
Текущее значение потока: C // после выполнения потока В
</code></pre>
<p><span class="attention">Данный оператор самостоятельно не завершает поток</span>, поэтому необходимо не забывать завершать поток при уничтожении компонента, в котором он используется, или при выполнении любой другой необходимой логики.</p>
<p>В примере выше поток самостоятельно завершится благодаря оператору <code>of</code>, т.к. он сам завершает поток, когда кончаются в нем элементы.</p>`,
        selected: false,
        lastUpdate: '14.04.2024',
        footerText: ['Дополнительный материал', 'Дополнительные материалы'],
        footerLinks: [
            {
                title: 'Подвигать шарики',
                path: 'https://rxmarbles.com/#concatMap',
            },
            {
                title: 'Анимация работы оператора',
                path: 'https://rxjstutorial.com/docs/transformation-operators/concatMap/',
            },
        ],
    },
    {
        title: '<span class="variable">exhaustMap</span>',
        body: `<p>
                Оператор <code>exhaustMap</code> используется для того, чтобы преобразовывать элементы одного
                <code>Observable</code> в другие <code>Observables</code>, но при этом
                <span class="attention">
                    он отличается от
                    <code>mergeMap</code> тем, что работает последовательно, а не параллельно</span
                >.
            </p>
            <p>
                <span class="attention">
                    Оператор <code>exhaustMap</code> будет ждать завершения предыдущего <code>Observable</code> перед
                    тем, как начать обрабатывать следующий</span
                >. Это означает, что
                <span class="attention">
                    если первый <code>Observable</code> завершается неудачей, второй <code>Observable</code> никогда не
                    будет запущен</span
                >. Если же первый <code>Observable</code> завершается успешно, то <code>exhaustMap</code> начинает
                обрабатывать второй <code>Observable</code>, игнорируя все последующие элементы из исходного
                <code>Observable</code>.
            </p>
            <img src="assets/img/angular/rxjs/exhaustMap.png" alt="оператор exhaustMap" />
            <p>
                Этот оператор полезен в случаях, когда нужно убедиться, что каждый <code>Observable</code> полностью
                завершился, прежде чем переходить к следующему. Например, если у вас есть серия операций, которые должны
                выполняться строго последовательно, и каждая операция зависит от результатов предыдущей.
            </p>
            <p>Пример использования <code>exhaustMap</code>:</p>
            <pre><code class="language-typescript">export class ForExamplesComponent {
    ngOnInit() {
        of('A', 'B', 'C')
            .pipe(
                exhaustMap((value) => {
                    return of(value).pipe(
                        delay(1000), // создаем искусственную задержку в 1 секунду
                        map((currentValue) => 'Текущее значение потока: ' + currentValue),
                    );
                }),
            )
            .subscribe(console.log);
    }
}</code></pre>
            <p>В консоли в итоге будет лишь одно значение:</p>
            <pre><code class="language-typescript">Текущее значение потока: А</code></pre>
            <p>
                В примере выше первым в поток попадает элемент "<code>A</code>". Затем за ним следом поступает в поток
                элемент "<code>B</code>". Он видит, что еще есть незавершенный поток с элементом "<code>A</code>",
                поэтому поток с элементом "<code>B</code>" игнорируется. Аналогично и с элементом "<code>C</code>".
                Поэтому в конечном результате мы и видим только элемент "<code>A</code>".
            </p>
			<p><span class="attention">Данный оператор самостоятельно не завершает поток</span>, поэтому необходимо не забывать завершать поток при уничтожении компонента, в котором он используется, или при выполнении любой другой необходимой логики.</p>
			<p>В примере выше поток самостоятельно завершится благодаря оператору <code>of</code>, т.к. он сам завершает поток, когда кончаются в нем элементы.</p>`,
        selected: false,
        lastUpdate: '14.04.2024',
        footerText: ['Дополнительный материал', 'Дополнительные материалы'],
        footerLinks: [
            {
                title: 'Анимация работы оператора',
                path: 'https://rxjstutorial.com/docs/transformation-operators/exhaustMap/',
            },
        ],
    },
    {
        title: '<span class="variable">map</span>',
        body: `<p>
                <span class="attention"
                    >Оператор <code>map</code> используется для преобразования элементов <code>Observable</code></span
                >. Он принимает функцию, которая определяет, как каждый элемент потока будет преобразован перед тем, как
                он будет передан дальше по цепочке операторов или в итоговый <code>Observable</code>.
            </p>
            <img src="assets/img/angular/rxjs/map.png" alt="оператор map" />
            <p>Пример:</p>
            <pre><code class="language-typescript">export class ForExamplesComponent {
    ngOnInit() {
        of(1, 2, 3)
            .pipe(map((x) => x * x))
            .subscribe((v) => console.log("Текущее значение: ", v));
    }
}</code></pre>
            <p>В итоге в консоли мы получим следующие данные:</p>
            <pre><code class="language-typescript">Текущее значение: 1
Текущее значение: 4
Текущее значение: 9</code></pre>
            <p>
                В примере выше оператор <code>map</code> умножает входящее значение само на себя и отдает результат
                далее в итоговый поток.
            </p>
            <p>
                Данный оператор <span class="attention">не завершает поток</span>, а просто изменяет заданным образом
                входящие значения.
            </p>
			<p><span class="attention">Данный оператор самостоятельно не завершает поток</span>, поэтому необходимо не забывать завершать поток при уничтожении компонента, в котором он используется, или при выполнении любой другой необходимой логики.</p>
			<p>В примере выше поток самостоятельно завершится благодаря оператору <code>of</code>, т.к. он сам завершает поток, когда кончаются в нем элементы.</p>`,
        selected: false,
        lastUpdate: '29.04.2024',
        footerText: ['Дополнительный материал', 'Дополнительные материалы'],
        footerLinks: [
            {
                title: 'Подвигать шарики',
                path: 'https://rxmarbles.com/#map',
            },
            {
                title: 'Анимация работы оператора',
                path: 'https://rxjstutorial.com/docs/transformation-operators/map/',
            },
        ],
    },
    {
        title: '<span class="variable">mergeMap</span> / <span class="variable">flatMap</span>',
        body: `<p>
                Оператор <code>mergeMap</code> (или <code>flatMap</code> в более старых версиях RxJS)
                <span class="attention">используется для разветвления потока данных в <code>Observables</code></span
                >. Он позволяет преобразовывать элементы одного <code>Observable</code> в несколько других
                <code>Observables</code> и объединять результаты этих преобразований в единый поток.
            </p>
            <img src="assets/img/angular/rxjs/mergeMap.png" alt="оператор mergeMap" />
            <p>
                Основная идея <code>mergeMap</code> заключается в том, чтобы взять каждый элемент исходного
                <code>Observable</code> и преобразовать его в новый <code>Observable</code>, который затем сливается
                обратно в основной поток. Это означает, что если исходный <code>Observable</code> генерирует много
                элементов, то <code>mergeMap</code>
                <span class="attention"> может обрабатывать их параллельно, что увеличивает производительность</span>.
            </p>
			<p>Пример использования <code>mergeMap</code>:</p>
            <pre><code class="language-typescript">export class ForExamplesComponent {
    ngOnInit() {
        of('A', 'B', 'C')
            .pipe(
                mergeMap((value) => {
                    return of(value).pipe(
                        delay(1000), // создаем искусственную задержку в 1 секунду
                        map((currentValue) => 'Текущее значение потока: ' + currentValue),
                    );
                }),
            )
            .subscribe(console.log);
    }
}</code></pre>
            <p>В итоге в консоли мы увидим следующий результат:</p>
            <pre><code class="language-typescript">Текущее значение потока: А // спустя 1 секунду
Текущее значение потока: В // спустя 1 секунду
Текущее значение потока: C // спустя 1 секунду
</code></pre>
            <p>
                В примере выше элементы "<code>A</code>", "<code>B</code>" и "<code>C</code>"
                <span class="attention">
                    поступают в поток друг за другом и выполняются независимо (параллельно) друг от друга</span
                >. Поэтому спустя 1 секунду искусственной задержки мы и видим сразу 3 результата.
            </p>
			<p><span class="attention">Данный оператор самостоятельно не завершает поток</span>, поэтому необходимо не забывать завершать поток при уничтожении компонента, в котором он используется, или при выполнении любой другой необходимой логики.</p>
			<p>В примере выше поток самостоятельно завершится благодаря оператору <code>of</code>, т.к. он сам завершает поток, когда кончаются в нем элементы.</p>`,
        selected: false,
        lastUpdate: '14.04.2024',
        footerText: ['Дополнительный материал', 'Дополнительные материалы'],
        footerLinks: [
            {
                title: 'Подвигать шарики',
                path: 'https://rxmarbles.com/#mergeMap',
            },
            {
                title: 'Анимация работы оператора',
                path: 'https://rxjstutorial.com/docs/transformation-operators/mergeMap/',
            },
        ],
    },
    {
        title: '<span class="variable">switchMap</span>',
        body: `<p>
                <span class="attention"
                    >Оператор <code>switchMap</code> используется для переключения между потоками данных</span
                >
                (<code>Observable</code>).
                <span class="attention"
                    >Он отменяет предыдущий поток и начинает новый поток, когда возникает новое значение</span
                >. Это означает, что <code>switchMap</code> будет пропускать все старые значения и начинать новый поток
                <code>Observable</code> при каждом новом значении.
            </p>
			<img
                src="assets/img/angular/rxjs/switchMap.png"
                alt="оператор switchMap"
            />
            <p>
                Это
                <span class="attention">
                    позволяет управлять побочными эффектами и предотвращать накопление нежелательных значений</span
                >. Он идеально подходит для случаев, когда нужно выполнять асинхронные операции (например, HTTP-запросы)
                в ответ на события, но при этом нужно избежать выполнения нескольких одних и тех же операций
                одновременно, а выполнить в итоге только последнее из них.
            </p>
            <p>
                Данный оператор корректно смотреть на примере, где есть какая-то задержка в выполнении потока, т.е.,
                своего рода имитация ожидания ответа от сервера:
            </p>
            <pre><code class="language-typescript">export class ForExamplesComponent {
    ngOnInit() {
        of('A', 'B', 'C')
            .pipe(
                switchMap((value) => {
                    return of(value).pipe(
                        delay(1000), // создаем искусственную задержку в 1 секунду
                        map((currentValue) => 'Текущее значение потока: ' + currentValue),
                    );
                }),
            )
            .subscribe(console.log);
    }
}</code></pre>
            <p>В консоли в итоге будет лишь одно значение:</p>
            <pre><code class="language-typescript">Текущее значение потока: C</code></pre>
            <p>
                Элементы "<code>A</code>", "<code>B</code>" и "<code>C</code>" поступают в поток друг за другом
                последовательно. Сначала поступает элемент "<code>A</code>" и из-за оператора
                <code>delay</code> задерживается на 1 секунду. В это время поступает в поток элемент "<code>B</code>",
                он видит, что уже есть поток с элементом "<code>A</code>", поэтому поток с элементом "<code>A</code>"
                закрывается и больше не учитывается, т.к. новое значение в потоке. И затем такой же сценарий происходит
                между элементами "<code>B</code>" и "<code>C</code>". Поэтому в конечном итоге мы и получаем в консоли
                элемент "<code>C</code>", т.к. новое значение после него не поступало больше, задержка в 1 секунду
                прошла и поток завершился.
            </p>
            <p>Теперь уберем задержку в 1 секунду:</p>
            <pre><code class="language-typescript">export class ForExamplesComponent {
    ngOnInit() {
        of('A', 'B', 'C')
            .pipe(
                switchMap((value) => {
                    return of(value).pipe(
                        map((currentValue) => 'Текущее значение потока: ' + currentValue),
                    );
                }),
            )
            .subscribe(console.log);
    }
}</code></pre>
            <p>В итоге в консоли мы увидим следующий результат:</p>
            <pre><code class="language-typescript">Текущее значение потока: А
Текущее значение потока: В
Текущее значение потока: C
</code></pre>
            <p>
                Т.к. элементы "<code>A</code>", "<code>B</code>" и "<code>C</code>" поступают в поток друг за другом
                последовательно и их выполнение никто не задерживает, поэтому сначала элемент "<code>A</code>" полностью
                проходит через оба потока, а затем аналогично элементы "<code>B</code>" и "<code>C</code>". Поэтому в
                консоли и отобразилось 3 результата.
            </p>
			<p><span class="attention">Данный оператор самостоятельно не завершает поток</span>, поэтому необходимо не забывать завершать поток при уничтожении компонента, в котором он используется, или при выполнении любой другой необходимой логики.</p>
			<p>В примере выше поток самостоятельно завершится благодаря оператору <code>of</code>, т.к. он сам завершает поток, когда кончаются в нем элементы.</p>`,
        selected: false,
        lastUpdate: '13.04.2024',
        footerText: ['Дополнительный материал', 'Дополнительные материалы'],
        footerLinks: [
            {
                title: 'Подвигать шарики',
                path: 'https://rxmarbles.com/#switchMap',
            },
        ],
    },
    { chapter: 'Операторы фильтрации (<span class="variable">Filtering Operators</span>)' },
    {
        title: '<span class="variable">take</span>',
        body: `<p>
                <span class="attention"
                    >Оператор <code>take</code> используется для ограничения количества элементов, которые будут
                    обработаны наблюдаемым потоком</span
                >
                (<code>Observable</code>). Этот оператор принимает один аргумент — количество элементов, которое должно
                быть обработано.
                <span class="attention">Как только это количество будет достигнуто, поток будет завершён</span>.
            </p>
            <img src="assets/img/angular/rxjs/take.png" alt="оператор take" />
            <p>Пример:</p>
            <pre><code class='language-typescript'>export class ForExamplesComponent {
    ngOnInit() {
        fromEvent(document, 'click')
            .pipe(take(2))
            .subscribe({
                next: () => console.log('Сделан клик'),
                error: () => console.log('Ошибка'),
                complete: () => console.log('Поток завершен'),
            });
    }
}</code></pre>
            <p>Если сделать 2 клика по странице в браузере, то в консоли мы увидим следующее:</p>
            <pre><code class="language-typescript">Сделан клик
Сделан клик
Поток завершен</code></pre>
            <p>
                При использовании данного оператора
                <span class="attention"> нужно быть уверенными, что нужное количество событий будет выполнено</span>. В
                противном случае просто произойдет подписка на <code>Observable</code> без дальнейшего завершения
                потока. И если злоупотреблять незавершенными потоками в приложении, то это чревато утечками памяти.
            </p>`,
        selected: false,
        lastUpdate: '01.05.2024',
        footerText: ['Дополнительный материал', 'Дополнительные материалы'],
        footerLinks: [
            {
                title: 'Подвигать шарики',
                path: 'https://rxmarbles.com/#take',
            },
            {
                title: 'Анимация работы оператора',
                path: 'https://rxjstutorial.com/docs/filtering-operators/take/',
            },
        ],
    },
    // {
    //     title: '',
    //     body: ``,
    // 	selected: false,
    // 	lastUpdate: ''
    // },
    {
        chapter:
            'Операторы объединения (<span class="variable">Join operators</span>) (для потоков более высокого порядка)',
    },
    // {
    //     title: '',
    //     body: ``,
    // 	selected: false,
    // 	lastUpdate: ''
    // },
    { chapter: 'Операторы многоадресной рассылки (<span class="variable">Multicasting Operators</span>)' },
    // {
    //     title: '',
    //     body: ``,
    // 	selected: false,
    // 	lastUpdate: ''
    // },
    { chapter: 'Операторы для обработки ошибок (<span class="variable">Error Handling Operators</span>)' },
    // {
    //     title: '',
    //     body: ``,
    // 	selected: false,
    // 	lastUpdate: ''
    // },
    { chapter: 'Различные полезные операторы (<span class="variable">Utility Operators</span>)' },
    // {
    //     title: '',
    //     body: ``,
    // 	selected: false,
    // 	lastUpdate: ''
    // },
    { chapter: 'Условные и логические операторы (<span class="variable">Conditional and Boolean Operators</span>)' },
    // {
    //     title: '',
    //     body: ``,
    // 	selected: false,
    // 	lastUpdate: ''
    // },
    {
        chapter:
            'Математические и агрегатные операторы (<span class="variable">Mathematical and Aggregate Operators</span>)',
    },
    // {
    //     title: '',
    //     body: ``,
    // 	selected: false,
    // 	lastUpdate: ''
    // },
    {
        chapter: 'Прочее',
    },
    {
        title: 'Создание кастомных операторов <span class="variable">RxJS</span>',
        body: `1`,
        selected: false,
        lastUpdate: '',
        disabled: true,
    },
    // {
    //     title: '',
    //     body: ``,
    // 	selected: false,
    // 	lastUpdate: ''
    // },
];
