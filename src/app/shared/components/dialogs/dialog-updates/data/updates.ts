import { IUpdates } from '../interfaces/updates.interface';

// Общие изменения в проекте
const COMMON = 'Общее';
// Разделы
const THEORY = 'Теория';
const TASKS = 'Задачи';
const COURSES = 'Курсы';
const TESTS = 'Тесты';
const CODE_REVIEW = 'Код-ревью';
const OTHER = 'Разное';

/**
 * Возвращает массив id обновлений
 */
export const getUpdatesIds = (): number[] => UPDATES.map((update) => update.id);

/**
 * Список обновлений.
 * Элементы массива заполняются в обратном порядке
 */
export const UPDATES: IUpdates[] = [
    {
        id: 1,
        date: '',
        changes: [
            {
                chapterTitle: THEORY,
                updated: ['Информация про этапы, происходящие в браузере (Разное)'],
            },
            {
                chapterTitle: TASKS,
                added: ['5 новых задач (JavaScript)'],
                updated: [
                    'Задача по проверке строки на палиндром (JavaScript)',
                    'Задача по созданию объекта-калькулятора (JavaScript)',
                ],
            },
        ],
    },
    {
        id: 7062025,
        date: '07.07.2025',
        changes: [
            {
                chapterTitle: THEORY,
                updated: ['Полностью переработан раздел по формам (Angular)'],
            },
        ],
    },
    {
        id: 19032025,
        date: '19.03.2025',
        changes: [
            {
                chapterTitle: COMMON,
                added: ['Раздел с записями собеседований'],
            },
            {
                chapterTitle: THEORY,
                added: [
                    'Информация разницу и схожесть между null и undefined (JavaScript)',
                    'Информация про разницу между операторами «??» и «||» (JavaScript)',
                    'Информация про передачу параметров в функцию (JavaScript)',
                    'Информация про обработку событий браузером (JavaScript)',
                    'Информация про обновление view при изменении данных за пределами зоны (NgZone) (Angular)',
                    'Информация про резолверы маршрутов (Angular)',
                    'Информация про RouteReuseStrategy (Angular)',
                ],
                updated: ['Информация про типы директив (Angular)'],
            },
            {
                chapterTitle: TESTS,
                added: ['7 новых вопросов для тестов (JavaScript)', '1 новый вопрос для тестов (Angular)'],
            },
        ],
    },
    {
        id: 1022025,
        date: '01.02.2025',
        changes: [
            {
                chapterTitle: THEORY,
                added: ['Информация про tree-shaking сервисов (Angular)'],
                updated: ['Правки по текстам (Angular)'],
            },
        ],
    },
    {
        id: 30012025,
        date: '30.01.2025',
        changes: [
            {
                chapterTitle: THEORY,
                updated: ['Правки по текстам (JavaScript, Разное)'],
            },
            {
                chapterTitle: TASKS,
                added: ['1 новая задача (JavaScript)'],
                updated: ['Задачи разделены по уровням сложности (JavaScript)'],
            },
            {
                chapterTitle: TESTS,
                updated: ['Вопросы и ответы в тестах (Angular)'],
            },
        ],
    },
    {
        id: 23012025,
        date: '23.01.2025',
        changes: [
            {
                chapterTitle: THEORY,
                added: ['Информация по интерцепторам (Angular)'],
            },
        ],
    },
    {
        id: 19012025,
        date: '19.01.2025',
        changes: [
            {
                chapterTitle: THEORY,
                added: [
                    'Информация про функцию inject (Angular)',
                    'Информация про класс HostAttributeToken (Angular)',
                    'Информация про inject vs constructor (Angular)',
                ],
            },
        ],
    },
    {
        id: 13012025,
        date: '13.01.2025',
        changes: [
            {
                chapterTitle: COMMON,
                updated: ['Кнопка "Курсы" теперь дает выбор платформы, куда будет выполнен переход'],
            },
            {
                chapterTitle: THEORY,
                added: ['В раздел "Сервисы" добавлена информация по свойству viewProviders (Angular)'],
            },
            {
                chapterTitle: TASKS,
                added: ['4 новые задачи из собеседований (JavaScript)'],
            },
        ],
    },
    {
        id: 18122024,
        date: '18.12.2024',
        changes: [
            {
                chapterTitle: THEORY,
                added: ['В раздел "Сервисы" добавлена информация по декораторам DI (Angular)'],
                updated: [
                    'Информация по общим понятиям декораторов в разделе "Декораторы" (Angular)',
                    'Информация по декораторам DI перенесена в раздел "Сервисы". В разделе "Декораторы" осталась непрямая ссылка на них (Angular)',
                    'Информация по декоратору @Attribute перенесена в раздел "Change Detection". В разделе "Декораторы" осталась непрямая ссылка на них (Angular)',
                ],
                removed: ['Информация по декоратору @Injectable в разделе "Декораторы" из-за неактуальности (Angular)'],
            },
        ],
    },
    {
        id: 7122024,
        date: '07.12.2024',
        changes: [
            {
                chapterTitle: COMMON,
                added: [
                    'Новая страница "Настройки", доступная в шапке проекта. В ней можно настраивать под себя проект',
                    'Модальное окно, в котором можно просматривать обновления проекта Helper',
                    'Выбор фонового изображения в проекте',
                ],
                updated: ['Выбор темы проекта перенесено на страницу "Настройки"'],
            },
            {
                chapterTitle: THEORY,
                added: ['Новая информация в раздел "Сервисы" (Angular)', 'Информация по директиве @let (Angular)'],
                updated: [
                    'Старая информация в разделе "Сервисы" (Angular)',
                    'Информация в разделе про авторизацию и аутентификацию (Разное)',
                    'Информация по standalone-сущностям (Angular)',
                ],
            },
            {
                chapterTitle: TESTS,
                added: ['52 новых вопроса по JavaScript (теперь суммарно 59 вопросов)'],
            },
            {
                chapterTitle: CODE_REVIEW,
                added: ['Новый раздел "Код-ревью"'],
            },
        ],
    },
    {
        id: 23092024,
        date: '23.09.2024',
        changes: [
            {
                chapterTitle: COMMON,
                added: [
                    'Новый общий раздел с задачами на главной странице',
                    'Новый общий раздел "Разное" на главной странице',
                ],
                updated: ['Информация по механизму Change Detection в разделе Angular'],
                fixed: ['Поведение стилей анимации при переходах между маршрутами'],
            },
            {
                chapterTitle: THEORY,
                added: ['Информация про CORS в разделе "Разное"'],
                updated: ['Информация по механизму Change Detection в разделе Angular'],
            },
        ],
    },
];
