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
                { path: 'theory/javascript', name: 'JavaScript' },
                { path: 'theory/angular', name: 'Angular' },
                { path: 'theory/git', name: 'Git' },
                { path: 'theory/others', name: 'Разное' },
            ],
        },
        {
            id: 'courses',
            title: 'Курсы',
            links: [
                {
                    href: 'https://www.youtube.com/playlist?list=PL2bJ6t_D6_KSSiM2Y8T32-5KgaNzzS4R6',
                    name: 'Angular',
                },
            ],
        },
        // {
        //     id: 'tasks',
        //     title: 'Задачи',
        //     links: [{ path: '#', name: 'JavaScript', disabled: true }],
        // },
        {
            id: 'quizzes',
            title: 'Тесты',
            links: [
                { path: 'quizzes/javascript', name: 'JavaScript' },
                { path: 'quizzes/angular', name: 'Angular' },
                // { path: '#', name: 'Git', disabled: true },
                // { path: '#', name: 'Разное', disabled: true },
            ],
        },
    ];
}
