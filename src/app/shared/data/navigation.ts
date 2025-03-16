import { INavigation, LinkType } from '../interfaces';

/**
 * Навигация по проекту.
 * Используется в хедере для быстрого перемещения между разделами, а также на стартовой странице
 */
export const NAVIGATION: INavigation[] = [
    {
        id: 'theory',
        path: 'theory',
        name: 'Теория',
        links: [
            { path: 'javascript', name: 'JavaScript' },
            { path: 'angular', name: 'Angular' },
            { path: 'git', name: 'Git' },
            { path: 'others', name: 'Разное' },
        ],
    },
    {
        id: 'tasks',
        path: 'tasks',
        name: 'Задачи с собеседований',
        links: [{ path: 'javascript', name: 'JavaScript' }],
    },
    {
        id: 'courses',
        path: '',
        name: 'Курсы',
        linkType: LinkType.MENU,
        menuName: 'Angular',
        links: [
            {
                path: 'https://www.youtube.com/playlist?list=PL2bJ6t_D6_KSSiM2Y8T32-5KgaNzzS4R6',
                name: 'Youtube',
                sideLink: true,
            },
            {
                path: 'https://rutube.ru/plst/308623/',
                name: 'Rutube',
                sideLink: true,
            },
        ],
    },
    {
        id: 'quizzes',
        path: 'quizzes',
        name: 'Тесты',
        links: [
            { path: 'javascript', name: 'JavaScript' },
            { path: 'angular', name: 'Angular' },
        ],
    },
    {
        id: 'interviews',
        path: '',
        name: 'Записи собеседований',
        links: [
            {
                path: 'https://boosty.to/yuri_simonov',
                name: 'Angular',
                sideLink: true,
            },
        ],
    },
    {
        id: 'code-review',
        path: 'code-review',
        name: 'Код-ревью',
        links: [{ path: 'angular', name: 'Angular' }],
    },
    {
        id: 'others',
        path: 'others',
        name: 'Разное',
        links: [{ path: 'hr', name: 'HR' }],
    },
];
