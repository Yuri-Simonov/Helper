import { IInfo } from 'src/app/shared/interfaces';

export const ABOUT_UTILITY_TYPES: IInfo = {
    title: 'Что такое утилиты (<span class="variable">utility types</span>) в TypeScript?',
    body: `<p>
                Утилиты (<code>utility types</code>) — это встроенные <code>generic</code>-типы, которые <span class="attention">
                    позволяют
                    трансформировать существующие типы
                </span> без дублирования кода.
            </p>`,
    selected: false,
    lastUpdate: '08.02.2026',
    footerText: ['Дополнительный материал', 'Дополнительные материалы'],
    footerLinks: [
        {
            title: 'Оф.документация',
            path: 'https://www.typescriptlang.org/docs/handbook/utility-types.html',
        },
    ],
};
