import { Routes } from '@angular/router';

import { JavascriptComponent } from './pages/javascript/javascript.component';
import { AngularComponent } from './pages/angular/angular.component';

export const quizzesModuleRoutes: Routes = [
    {
        path: 'quizzes/angular',
        component: AngularComponent,
    },
    {
        path: 'quizzes/javascript',
        component: JavascriptComponent,
    },
];
