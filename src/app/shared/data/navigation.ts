import { INavigation } from '../types';

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
        name: 'Задачи',
        links: [{ path: 'javascript', name: 'JavaScript' }],
    },
    {
        id: 'courses',
        path: '',
        name: 'Курсы',
        links: [
            {
                path: 'https://www.youtube.com/playlist?list=PL2bJ6t_D6_KSSiM2Y8T32-5KgaNzzS4R6',
                name: 'Angular',
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
        id: 'others',
        path: 'others',
        name: 'Разное',
        links: [{ path: 'hr', name: 'HR' }],
    },
];
