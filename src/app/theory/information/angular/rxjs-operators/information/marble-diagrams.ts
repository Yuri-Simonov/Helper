import { IInfo } from 'src/app/shared/interfaces';

export const MARBLE_DIAGRAMS: IInfo = {
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
};
