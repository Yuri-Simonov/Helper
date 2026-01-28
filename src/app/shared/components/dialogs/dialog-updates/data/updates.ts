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
        id: 27012026,
        date: '27.01.2026',
        changes: [
            {
                chapterTitle: THEORY,
                added: ['Разница между merge и rebase (Git)', 'Проверка на Observable (Angular)'],
                // updated: ['Информация про операторы from и of (Angular)'],
            },
        ],
    },
    {
        id: 24012026,
        date: '24.01.2026',
        changes: [
            {
                chapterTitle: THEORY,
                added: ['Расширен список операторов RxJS (Angular)'],
                updated: ['Информация про операторы from и of (Angular)'],
            },
        ],
    },
    {
        id: 20122025,
        date: '20.12.2025',
        changes: [
            {
                chapterTitle: THEORY,
                added: ['Раздел с сигналами (Angular)', 'Информация про HTTP-статусы (Разное)'],
                updated: ['Информация про этапы, происходящие в браузере (Разное)'],
            },
            {
                chapterTitle: TASKS,
                added: ['10 новых задач (JavaScript)'],
                updated: [
                    'Задача по проверке строки на палиндром (JavaScript)',
                    'Задача по созданию объекта-калькулятора (JavaScript)',
                ],
            },
            {
                chapterTitle: COMMON,
                fixed: ['Исправлен сброс фона при нажатии на клавишу Esc'],
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
];
