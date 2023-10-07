import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IChapter } from '../../types/chapter.interface';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
    chapters: IChapter[] = [
        {
            id: 'theory',
            title: 'Теоретические материалы',
            links: [
                { route: 'javascript', name: 'JavaScript' },
                { route: 'angular', name: 'Angular' },
                { route: 'git', name: 'Git' },
                { route: 'others', name: 'Разное', disabled: true },
            ],
        },
        {
            id: 'courses',
            title: 'Курсы',
            links: [
                {
                    href: 'https://www.youtube.com/playlist?list=PL2bJ6t_D6_KSSiM2Y8T32-5KgaNzzS4R6',
                    name: 'Angular 16 (2023)',
                },
            ],
        },
        {
            id: 'tasks',
            title: 'Задачи',
            links: [{ route: '#', name: 'JavaScript', disabled: true }],
        },
        {
            id: 'tests',
            title: 'Тесты',
            links: [
                { route: '#', name: 'JavaScript', disabled: true },
                { route: '#', name: 'Angular', disabled: true },
                { route: '#', name: 'Git', disabled: true },
                { route: '#', name: 'Разное', disabled: true },
            ],
        },
    ];
}
