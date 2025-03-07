import { IInfo } from 'src/app/shared/interfaces';

export const PROTRACTOR: IInfo = {
    title: '<span class="variable">Protractor</span>. Определение',
    body: `<p>
            <span class="attention">Protractor</span> - фреймворк комплексного
            тестирования, с помощью которого можно тестировать Angular-приложение прямо в браузере, имитируя взаимодействия, как c реальным
            пользователем.
        </p>
        <p>По умолчанию с ним в коробке идет 2 фреймворка для тестирования:</p>
        <ul>
            <li>Unit-тесты на Jasmine и Karma</li>
            <li>Комплексные тесты на Protractor</li>
        </ul>
        <p>
            Основное различие - первый используется для тестирования логики
            компонентов и сервисов, а второй используется для проверки
            функциональности высокого уровня приложения (в том числе и UI
            элементы).
        </p>`,
    selected: false,
    lastUpdate: '05.02.2024',
};
