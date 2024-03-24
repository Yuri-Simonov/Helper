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
            { text: 'combineLatest', right: false },
            { text: 'Такого оператора в RxJs не существует', right: false },
        ],
    },
    {
        question: `Какой оператор RxJs ждет выполнения всех переданных в него потоков и в результате объединяет их в порядке передачи внутрь объекта?`,
        answers: [
            { text: 'concat', right: true },
            { text: 'forkJoin', right: false },
            { text: 'zip', right: false },
            { text: 'merge', right: false },
            { text: 'join', right: false },
            { text: 'combineLatest', right: false },
            { text: 'Такого оператора в RxJs не существует', right: false },
        ],
    },
    {
        question: `Какой оператор RxJs добавляет в единый поток события получаемых потоков в момент появления этих самых событий, и при этом ему не важна последовательность передаваемых потоков внутрь?`,
        answers: [
            { text: 'merge', right: true },
            { text: 'concat', right: false },
            { text: 'forkJoin', right: false },
            { text: 'zip', right: false },
            { text: 'combineLatest', right: false },
            { text: 'fork', right: false },
            { text: 'Такого оператора в RxJs не существует', right: false },
        ],
    },
    {
        question: `Какой оператор RxJs объединяет потоки, если в каждом из переданных потоков есть доступные для создания пары события?`,
        answers: [
            { text: 'zip', right: true },
            { text: 'merge', right: false },
            { text: 'concat', right: false },
            { text: 'forkJoin', right: false },
            { text: 'join', right: false },
            { text: 'fork', right: false },
            { text: 'Такого оператора в RxJs не существует', right: false },
        ],
    },
    {
        question: `Какой оператор RxJs объединяет потоки, если в каждом из переданных потоков есть доступные для создания пары события?`,
        answers: [
            { text: 'zip', right: true },
            { text: 'merge', right: false },
            { text: 'concat', right: false },
            { text: 'forkJoin', right: false },
            { text: 'join', right: false },
            { text: 'fork', right: false },
            { text: 'Такого оператора в RxJs не существует', right: false },
        ],
    },
    {
        question: `Какой оператор RxJs объединяет потоки таких образом, что в объединенном потоке создается пара из последних событий каждого из переданных потоков и при этом перезатираются старые события?`,
        answers: [
            { text: 'combineLatest', right: true },
            { text: 'zip', right: false },
            { text: 'merge', right: false },
            { text: 'concat', right: false },
            { text: 'forkJoin', right: false },
            { text: 'join', right: false },
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
        question: `В чем состоит отличие модуля от компонента?`,
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
        question: `Какой декоратор в Angular используется для передачи данных от родительского компонента к дочернему?`,
        answers: [
            { text: '@Input()', right: true },
            { text: '@Output()', right: false },
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
            { text: 'router-outlet', right: true },
            { text: 'router-active', right: false },
            { text: 'router-current', right: false },
            { text: 'router-output', right: false },
            { text: 'router-input', right: false },
            { text: 'router-routing', right: false },
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
        question: `Какой метод класса RouterModule должен быть вызван для регистрации маршрутов в любом другом модуле приложения, отличным от корневого?`,
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
    {
        question: `Сколько экземпляров пользовательского сервиса будет создано, если добавить этот сервис в поле providers конфигурационного объекта декоратора @Component() для двух разных компонентов?`,
        answers: [
            { text: '2', right: true },
            { text: '0', right: false },
            { text: '1', right: false },
            { text: 'У декоратора @Component() нет поля providers в конфигурационном объекте', right: false },
        ],
    },
    {
        question: `Верно ли утверждение, что async pipe подписывается на наблюдателя (Observable) и обновляет каждый раз выражение, когда от наблюдателя приходят новые данные`,
        answers: [
            { text: 'Да', right: true },
            { text: 'Нет', right: false },
        ],
    },
    {
        question: `Можно ли использовать вместе с async pipe другие pipes в одном и том же выражении?`,
        answers: [
            { text: 'Можно', right: true },
            { text: 'Нельзя', right: false },
            { text: 'Async pipe нет в Angular', right: false },
        ],
    },
    {
        question: `В чем заключается основное преимущество async pipe?`,
        answers: [
            {
                text: 'Async pipe самостоятельно подписывается на наблюдателя и обновляет выражение каждый раз, когда наблюдатель отправляет новые данные. Это позволяет упростить работу с асинхронными операциями и избежать необходимости вручную управлять подписками и отписками от наблюдателей.',
                right: true,
            },
            {
                text: 'Async pipe срабатывает после инициализации компонента, что позволяет отображать значения после выполнения синхронного кода',
                right: false,
            },
            {
                text: 'Async pipe нет в Angular',
                right: false,
            },
            {
                text: 'У async pipe нет каких-либо преимуществ относительно синхронных пайп. Она просто следит за наблюдателем и обновляет выражение каждый раз, когда наблюдатель отправляет новые данные',
                right: false,
            },
        ],
    },
    {
        question: `Какой декоратор позволяет получить доступ к элементу хоста из директивы или компонента?`,
        answers: [
            { text: '@Host()', right: true },
            { text: '@Attribute()', right: false },
            { text: '@Parent()', right: false },
            { text: '@Self()', right: false },
            { text: '@Root()', right: false },
        ],
    },
    {
        question: `Верно ли утверждение, что во всем Angular-приложении быть только один элемент <router-outlet>?`,
        answers: [
            { text: 'Неверно', right: true },
            { text: 'Верно', right: false },
        ],
    },
    {
        question: `Может ли в Angular-приложении быть более одного элемента <router-outlet> в одном и том же компоненте?`,
        answers: [
            { text: 'Может', right: true },
            { text: 'Не может', right: false },
        ],
    },
    {
        question: `Как в Angular реализуется валидация форм?`,
        answers: [
            {
                text: 'Встроенный функционал валидации форм заложен в модуль FormsModule',
                right: true,
            },
            {
                text: 'С помощью специальный css-классов, которые добавляются на поля формы, если оно валидно',
                right: false,
            },
            {
                text: 'Валидацию полей формы создается вручную или используются различные сторонние библиотеки',
                right: false,
            },
        ],
    },
    {
        question: `Основное назначение файла environment.ts в Angular?`,
        answers: [
            { text: 'Определение и хранение переменных окружения', right: true },
            { text: 'Настройка маршрутизации', right: false },
            { text: 'Настройка структуры приложения', right: false },
            { text: 'Настройка архитектуры приложения', right: false },
        ],
    },
    {
        question: `Как можно обработать ошибки HTTP-запросов в сервисе Angular?`,
        answers: [
            { text: 'Используя оператор catchError из библиотеки RxJS', right: true },
            { text: 'Используя оператор catch из библиотеки RxJS', right: false },
            { text: 'Используя оператор tryCatch из библиотеки RxJS', right: false },
            { text: 'Используя конструкцию try/catch из нативного JavaScript', right: false },
            { text: 'Используя конструкцию if/else из нативного JavaScript', right: false },
        ],
    },
    {
        question: `Какой метод жизненного цикла Angular вызывается после полной инициализации представления компонента?`,
        answers: [
            { text: 'ngAfterViewInit', right: true },
            { text: 'ngOnInit', right: false },
            { text: 'ngOnChanges', right: false },
            { text: 'ngOnDestroy', right: false },
            { text: 'ngAfterContentInit', right: false },
        ],
    },
    {
        question: `Какой метод жизненного цикла Angular ни разу не вызывается в момент инициализации компонента?`,
        answers: [
            { text: 'ngOnDestroy', right: true },
            { text: 'ngOnChanges', right: false },
            { text: 'ngAfterViewInit', right: false },
            { text: 'ngOnInit', right: false },
            { text: 'ngAfterContentInit', right: false },
        ],
    },
    {
        question: `Какой метод жизненного цикла Angular вызывается в момент удаления компонента из DOM-дерева?`,
        answers: [
            { text: 'ngOnDestroy', right: true },
            { text: 'ngOnChanges', right: false },
            { text: 'ngAfterViewInit', right: false },
            { text: 'ngOnInit', right: false },
            { text: 'ngAfterContentInit', right: false },
        ],
    },
    {
        question: `Для чего нужен элемент ng-content?`,
        answers: [
            {
                text: 'Для отображения в шаблоне содержимого, заключенного между тегами компонента в месте его вызова',
                right: true,
            },
            { text: 'Для привязки внешнего содержимого', right: false },
            { text: 'Для создания динамических шаблонов', right: false },
            { text: 'Для отображения динамического содержимого', right: false },
            {
                text: 'Для отображения в шаблоне содержимого, которое находится внутри элемента ng-template',
                right: false,
            },
        ],
    },
    {
        question: `В чем заключается основное преимущество использования реактивных форм Angular по сравнению с управляемыми шаблонными формами?`,
        answers: [
            {
                text: 'Реактивные формы предоставляют более гибкий и мощный способ управления данными формы',
                right: true,
            },
            {
                text: 'Реактивные формы предоставляют возможность использовать встроенные валидаторы форм',
                right: false,
            },
            { text: 'Нужно меньше писать кода и проще синтаксис', right: false },
            {
                text: 'В реактивных формах данные привязываются автоматически к полям формы',
                right: false,
            },
        ],
    },
    {
        question: `В чем заключается основное назначение библиотеки NgRx?`,
        answers: [
            { text: 'Управление состоянием', right: true },
            { text: 'Управление маршрутизацией', right: false },
            { text: 'Управление архитектурой проекта', right: false },
            { text: 'Обработка ошибок HTTP-запросов', right: false },
        ],
    },
    {
        question: `Какой декоратор используется для создания HTTP-интерцептора?`,
        answers: [
            { text: '@Injectable()', right: true },
            { text: '@HttpInterceptor()', right: false },
            { text: '@Interceptor()', right: false },
            { text: '@HttpRequest()', right: false },
        ],
    },
    {
        question: `Какой из вариантов позволяет повысить производительность Angular-приложение?`,
        answers: [
            { text: 'Использование ленивой загрузки модулей', right: true },
            {
                text: 'Использование настройки "changeDetection: ChangeDetectionStrategy.Default" в компонентах',
                right: false,
            },
            { text: 'Стараться как можно меньше использовать async pipe в шаблонах компонентов', right: false },
            { text: 'Писать шаблоны компонентов внутри ts-файлов', right: false },
        ],
    },
    {
        question: `Для чего используется async pipe в шаблонах Angular?`,
        answers: [
            { text: 'Для автоматической отмены подписки на Observables', right: true },
            { text: 'Для обращения к серверу из шаблона', right: false },
            { text: 'Для обращения к сервису из шаблона', right: false },
            {
                text: 'Async pipe позволяет использовать более двух структурных директив на одном и том же элементе разметки',
                right: false,
            },
        ],
    },
    {
        question: `Какой встроенный в Angular сервис позволяет управлять механизмом ChangeDetection?`,
        answers: [
            { text: 'ChangeDetectorRef', right: true },
            { text: 'ChangeDetectionControl', right: false },
            { text: 'ChangeDetectorControl', right: false },
            { text: 'ChangeDetector', right: false },
            { text: 'ChangeDetectionRef', right: false },
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
