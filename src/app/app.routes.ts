import { Routes } from '@angular/router';

import { ForExamplesComponent } from './for-examples/for-examples/for-examples.component';

import { homeRoutes } from './home/routes';
import { codeReviewRoutes } from './code-review/routes';
import { othersRoutes } from './others/routes';
import { quizzesRoutes } from './quizzes/routes';
import { settingsRoutes } from './settings/routes';
import { tasksRoutes } from './tasks/routes';
import { theoryRoutes } from './theory/routes';

export const routes: Routes = [
    {
        path: 'for-examples',
        component: ForExamplesComponent,
    },
    // /settings/...
    ...settingsRoutes,
    // /home/...
    ...homeRoutes,
    // /code-review/...
    ...codeReviewRoutes,
    // /others/...
    ...othersRoutes,
    // /quizzes/...
    ...quizzesRoutes,
    // /tasks/...
    ...tasksRoutes,
    // /theory/...
    ...theoryRoutes,
    { path: '**', redirectTo: '' },
];
