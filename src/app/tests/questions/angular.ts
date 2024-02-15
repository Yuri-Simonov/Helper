import { IQuestionsAndAnswer } from '../../shared/types';

export const angularTestQuestions: IQuestionsAndAnswer[] = [
    {
        question: `Какое из приведенных ниже различий между директивой и компонентом является верным?`,
        answers: [
            { text: 'У компонента есть свой собственный шаблон, у директивы - нет', right: true },
            { text: 'Нет никакой разницы, т.к. компоненты и директивы - это одно и то же', right: false },
            { text: 'У директивы есть свой собственный шаблон, у компонента - нет', right: false },
        ],
    },
    {
        question: `Какое из приведенных ниже различий между директивой и компонентом является верным?`,
        answers: [
            {
                text: 'Директивы имеют декоратор @Directive(), а компоненты - @Component()',
                right: true,
            },
            { text: 'Нет никакой разницы, т.к. компоненты и директивы - это одно и то же', right: false },
            {
                text: 'Директивы имеют декоратор @Component(), а компоненты - @Directive()',
                right: false,
            },
            {
                text: 'Директивы служат хранилищем данных для компонента',
                right: false,
            },
        ],
    },
    {
        question: `Какой оператор RxJs ждет выполнения всех переданных в него потоков и в результате дает объединенный поток с последними их значениями?`,
        answers: [
            { text: 'forkJoin', right: true },
            { text: 'zip', right: false },
            { text: 'concat', right: false },
            { text: 'merge', right: false },
            { text: 'join', right: false },
            { text: 'fork', right: false },
            { text: 'Такого оператора в RxJs не существует', right: false },
        ],
    },
    {
        question: `Какого оператора нет в RxJs?`,
        answers: [
            { text: 'fork', right: true },
            { text: 'forkJoin', right: false },
            { text: 'zip', right: false },
            { text: 'concat', right: false },
            { text: 'merge', right: false },
            { text: 'в RxJs есть все указанные операторы', right: false },
        ],
    },
    {
        question: `Какого оператора нет в RxJs?`,
        answers: [
            { text: 'join', right: true },
            { text: 'forkJoin', right: false },
            { text: 'zip', right: false },
            { text: 'concat', right: false },
            { text: 'merge', right: false },
            { text: 'в RxJs есть все указанные операторы', right: false },
        ],
    },
    {
        question: `Какого оператора нет в RxJs?`,
        answers: [
            { text: 'switch', right: true },
            { text: 'forkJoin', right: false },
            { text: 'zip', right: false },
            { text: 'concat', right: false },
            { text: 'merge', right: false },
            { text: 'в RxJs есть все указанные операторы', right: false },
        ],
    },
    {
        question: `Какого оператора нет в RxJs?`,
        answers: [
            { text: 'в RxJs есть все указанные операторы', right: true },
            { text: 'forkJoin', right: false },
            { text: 'zip', right: false },
            { text: 'concat', right: false },
            { text: 'merge', right: false },
            { text: 'switchMap', right: false },
        ],
    },
    {
        question: `Какие есть виды pipe в Angular?`,
        answers: [
            { text: 'pure и impure', right: true },
            { text: 'pure, impure и async', right: false },
            { text: 'sync и async', right: false },
            { text: 'pure, impure, sync и async', right: false },
        ],
    },
    {
        question: `Что такое Guards и зачем они нужны в Angular?`,
        answers: [
            {
                text: 'Guard - это одна из сущностей в Angular, которая используется для контроля доступа к определенным частям приложения',
                right: true,
            },
            {
                text: 'Guard - это встроенный механизм в Angular, которая защищает приложение от попыток использования вредоносного кода извне',
                right: false,
            },
            {
                text: 'Guard - это встроенный модуль в Angular, который отвечает за маршрутизацию',
                right: false,
            },
            {
                text: 'С помощью Guards осуществляется или запрещается запуск приложения c настройкой "production = true"',
                right: false,
            },
        ],
    },
    {
        question: `В какое из полей конфигурационного объекта декоратора @NgModule() нужно подключать компоненты, директивы и пайпы, если они не являются standalone сущностью (т.е. "standalone = false")?`,
        answers: [
            { text: 'declarations', right: true },
            { text: 'imports', right: false },
            { text: 'providers', right: false },
            { text: 'exports', right: false },
            { text: 'bootstrap', right: false },
        ],
    },
    {
        question: `В какое из полей конфигурационного объекта декоратора @NgModule() нужно подключать компоненты, директивы и пайпы, если они являются standalone сущностью (т.е. "standalone = true")?`,
        answers: [
            { text: 'imports', right: true },
            { text: 'declarations', right: false },
            { text: 'exports', right: false },
            { text: 'providers', right: false },
            { text: 'bootstrap', right: false },
        ],
    },
    {
        question: `Есть ли разница между AngularJS и Angular?`,
        answers: [
            {
                text: 'Это два разных фреймворка, причем Angular является более современным по отношению к AngularJS, т.к. в нем используются TypeScript и последнии версии стандартов языка JavaScript',
                right: true,
            },
            {
                text: 'Нет никакой разницы, т.к. приставку "JS" просто убрали со временем и решили оставить просто Angular',
                right: false,
            },
            {
                text: 'Это два разных фреймворка, причем AngularJS является более современным по отношению к Angular, т.к. в нем используются TypeScript и последнии версии стандартов языка JavaScript',
                right: false,
            },
        ],
    },
    {
        question: `Что такое модуль в Angular?`,
        answers: [
            {
                text: 'Это класс c декоратором @NgModule(), который служит изолирующей логической объединяющей структурой для компонентов, директив, фильтров и сервисов',
                right: true,
            },
            {
                text: 'Это корневой компонент, без которого невозможна работа приложения',
                right: false,
            },
            {
                text: 'Это встроенный интерфейс командной строки для создания, разработки и поддержки Angular приложений',
                right: false,
            },
        ],
    },
    {
        question: `Что такое компонент в Angular?`,
        answers: [
            {
                text: 'Это часть интерфейса приложения с собственными шаблоном, логикой и стилями. Все компоненты в совокупности и есть приложение Angular',
                right: true,
            },
            {
                text: 'Это основа Angular-приложения, т.к. к нему подключаются все имеющиеся в приложении модули',
                right: false,
            },
            {
                text: 'Это специальные теги, на которые можно вешать директивы',
                right: false,
            },
        ],
    },
    {
        question: `В чем состоит отличие модуля от компонента`,
        answers: [
            {
                text: 'Модуль - это изолирующая логическая структура, объединяющая внутри себя более мелкие составляющие блоки, например компоненты, которые являются частями интерфейса приложения (более мелкие составляющие блоки, чем модули)',
                right: true,
            },
            {
                text: 'Модуль - это часть интерфейса приложения, а компонент - это изолирующая логическая структура. Компонент объединяет внутри себя более мелкие составляющие блоки, к которым относятся модули',
                right: false,
            },
            {
                text: 'Нет правильного ответа',
                right: false,
            },
            {
                text: 'Модулем называется корневой файл приложения, к которому подключаются все остальные логические блоки, называющиеся компонентами',
                right: false,
            },
        ],
    },
    {
        question: `Какой параметр конфигурационного объекта декоратора @Component() является обязательным?`,
        answers: [
            {
                text: 'Для данного декоратора обязательным является наличие шаблона, т.к. компонент - это та же директива, но со своим собственным HTML-шаблоном. И т.к. шаблон можно задать через параметры "template" или "templateUrl", то достаточно будет указать любой из них',
                right: true,
            },
            {
                text: 'Для данного декоратора обязательным является наличие шаблона, т.к. компонент - это та же директива, но со своим собственным HTML-шаблоном. Поэтому всегда необходимо указывать параметр "template"',
                right: false,
            },
            {
                text: 'Для данного декоратора обязательным является наличие шаблона, т.к. компонент - это та же директива, но со своим собственным HTML-шаблоном. Поэтому всегда необходимо указывать параметр "templateUrl"',
                right: false,
            },
            {
                text: 'Для данного декоратора обязательным является указание селектора, т.е. название текущего компонента, с помощью которого можно использовать текущий компонент в шаблонах других компонентов',
                right: false,
            },
            {
                text: 'У данного декоратора нет обязательных параметров в конфигурационном объекте',
                right: false,
            },
        ],
    },
    {
        question: `Что такое сервисы и зачем они нужны в Angular?`,
        answers: [
            {
                text: 'Сервисы - это одна из разновидностей сущностей в Angular, которая служит своего рода хранилищем данных, к которому можно обращаться из различных частей приложения',
                right: true,
            },
            {
                text: 'Сервисы - это один из встроенных модулей в Angular, с помощью которого осуществляются запросы к серверу для получения данных',
                right: false,
            },
            {
                text: 'Сервисы - это один из встроенных модулей в Angular, который используется для CRUD-операций',
                right: false,
            },
        ],
    },
    {
        question: `Какой декоратор в Angular используется для передачи данных от дочернего компонента к родительскому?`,
        answers: [
            { text: '@Output()', right: true },
            { text: '@Input()', right: false },
            { text: 'Input', right: false },
            { text: 'Output', right: false },
        ],
    },
    {
        question: `Как называется css-класс, который добавляется на поле формы при изменении его первоначального значения?`,
        answers: [
            { text: '.ng-dirty', right: true },
            { text: '.ng-pending', right: false },
            { text: '.ng-pristine', right: false },
            { text: '.ng-invalid', right: false },
        ],
    },
    {
        question: `Какая директива в Angular используется для отображения соответствующего компонента по активному маршруту?`,
        answers: [
            { text: '<router-outlet></router-outlet>', right: true },
            { text: '<router-active></router-active>', right: false },
            { text: '<router-current></router-current>', right: false },
            { text: '<router-output></router-output>', right: false },
            { text: '<router-input></router-input>', right: false },
            { text: '<router-routing></router-routing>', right: false },
        ],
    },
    {
        question: `Какой метод класса RouterModule должен быть вызван для предоставления всех маршрутов в корневом модуле приложения?`,
        answers: [
            { text: 'forRoot', right: true },
            { text: 'forChild', right: false },
            { text: 'setRoutes', right: false },
            {
                text: 'RouterModule не должен вызывать никакие методы, т.к. все имеющиеся маршруты хранятся в отдельной переменной в корневом модуле приложения и в нем же декларируются',
                right: false,
            },
        ],
    },
    {
        question: `Какой метод класса RouterModule должен быть вызван для регистрации маршрутов в любом другом моделу приложения, отличным от корневого?`,
        answers: [
            { text: 'forChild', right: true },
            { text: 'forRoot', right: false },
            { text: 'setRoutes', right: false },
            {
                text: 'RouterModule не должен вызывать никакие методы, т.к. все имеющиеся маршруты хранятся в отдельной переменной в корневом модуле приложения и в нем же декларируются',
                right: false,
            },
        ],
    },
];
// {
//     question: ``,
//     answers: [
//         { text: '', right: true },
//         { text: '', right: false },
//     ],
// },
