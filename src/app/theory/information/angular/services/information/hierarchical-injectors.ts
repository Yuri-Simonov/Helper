import { IInfo } from 'src/app/shared/interfaces';

export const HIERARCHICAL_INJECTORS: IInfo = {
    title: 'Иерархия инжекторов',
    body: `<p>В Angular существует следующая иерархия (уровни) инжекторов:</p>
            <ul>
                <li><span class="attention">ElementInjector</span> - инжекторы дочерних элементов;</li>
                <li>
                    <span class="attention">RootInjector</span> - инжектор корневого элемента приложения. И тут неважно,
                    используете ли вы в корне проекта standalone-компонент или модуль. Что указано в файле
                    <code>main.ts</code>, то и будет корнем приложения;
                </li>
                <li>
                    <span class="attention">PlatformInjector</span> - инжектор платформы. На данном уровне внедряется
                    различный вспомогательный функционал, например <code>DomSanitizer</code>, который предназначен для
                    повышения безопасности наших Angular-приложений. Мы тоже можем здесь регистрировать свои
                    зависимости, но на практике обычно выше корневого инжектора зависимости не регистрируют.
                </li>
                <li>
                    <span class="attention">NullInjector</span> - самый высокий инжектор. В нем ничего нельзя
                    зарегистрировать. Он служит лишь для выбрасывания ошибки в ситуациях, когда запрашиваемая
                    зависимость не была найдена по маршруту от места, где она запрашивается, и вверх по иерархии, вплоть
                    до самого верхнего инжектора.
                </li>
            </ul>
            <p>Ниже представлен пример иерархии инжекторов на произвольном дереве компонентов:</p>
            <img
                src="assets/img/angular/services/hierarchical-injectors.png"
                alt="Иерархия инжекторов"
                class="large-img"
            />`,
    selected: false,
    lastUpdate: '27.10.2024',
    footerLinks: [
        {
            path: 'https://youtu.be/mFem0yjCkn4?t=252',
        },
    ],
};
