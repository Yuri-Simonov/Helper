import { Routes } from '@angular/router';

import { JavascriptComponent } from './pages/javascript/javascript.component';
import { AngularComponent } from './pages/angular/angular.component';
import { QuizzesComponent } from './quizzes.component';

export const quizzesRoutes: Routes = [
    {
        path: 'quizzes',
        component: QuizzesComponent,
        children: [
            {
                path: 'angular',
                component: AngularComponent,
            },
            {
                path: 'javascript',
                component: JavascriptComponent,
            },
        ],
    },
];
