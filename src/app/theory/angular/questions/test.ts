import { IQuestion } from '@types';

export const testQuestions: IQuestion[] = [
    {
        title: 'Что такое "Protractor"?',
        body: `<p>
            <span class="attention">Protractor</span> - фреймворк комплексного
            тестирования, с помощью которого можно тестировать Angular
            приложение прямо в браузере, имитируя взаимодействия, как c реальным
            пользователем.
        </p>
        <p>По умолчанию с ним в коробке идет 2 фреймворка для тестирования:</p>
        <ul>
            <li>Юнит тесты на Jasmine и Karma</li>
            <li>Комплексные тесты на Protractor</li>
        </ul>
        <p>
            Основное различие - первый используется для тестирования логики
            компонентов и сервисов, а второй используется для проверки
            функциональности высокого уровня приложения (в том числе и UI
            элементы).
        </p>`,
        selected: false,
    },
    {
        title: 'test',
        body: `
		<p>this is an example</p>
<pre>
  <code>
function myFunction() {
  document.getElementById("demo1").innerHTML = "Hello there!";
  document.getElementById("demo2").innerHTML = "How are you?";
}
  </code>
</pre>

<pre>
  <code class="language-css">
p .pre,
i + pre {
    margin-top: 0;
}
  </code>
</pre>

<pre>
  <code class="language-typescript">
export class HomeComponent {
    chapters: IChapter[] = [
        {
            id: 'theory',
            title: 'Теоретические материалы',
            links: [
                { path: 'theory/javascript', name: 'JavaScript' },
                { path: 'theory/angular', name: 'Angular' },
                { path: 'theory/git/all', name: 'Git' },
                { path: 'theory/others', name: 'Разное', disabled: true },
            ],
        }
    ];
}
  </code>
</pre>	
		`,
        selected: false,
    },
];
