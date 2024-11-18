import { IUpdates } from '../interfaces';

/**
 * Возвращает массив id обновлений
 */
export const getUpdatesIds = (): number[] => UPDATES.map((update) => update.id);

/**
 * Список обновлений.
 * Элементы массива заполняются в обратном порядке
 */
export const UPDATES: IUpdates[] = [
    // {
    //     id: 23092024,
    //     title: 'Обновление от 23.09.2024 (Angular)',
    //     changes: [
    //         {
    //             chapterTitle: 'Общее',
    //             added: [''],
    //             updated: [''],
    //             fixed: [''],
    //             removed: [''],
    //         },
    //         {
    //             chapterTitle: 'Теория',
    //             added: [''],
    //             updated: [''],
    //         },
    //     ],
    // },
    {
        id: 23092024,
        title: 'Обновление от 23.09.2024 (Angular)',
        changes: [
            {
                chapterTitle: 'Общее',
                added: [
                    'Новый общий раздел с задачами на главной странице',
                    'Новый общий раздел "Разное" на главной странице',
                ],
                updated: ['Информация по механизму Change Detection в разделе Angular'],
                fixed: ['Поведение стилей анимации при переходах между маршрутами'],
            },
            {
                chapterTitle: 'Теория',
                added: ['Информация про CORS в разделе "Разное"'],
                updated: ['Информация по механизму Change Detection в разделе Angular'],
            },
        ],
    },
];
