import { Routes } from '@angular/router';

import { AngularComponent } from './pages/angular/angular.component';
import { CodeReviewComponent } from './code-review.component';

export const codeReviewRoutes: Routes = [
    {
        path: 'code-review',
        component: CodeReviewComponent,
        children: [
            {
                path: 'angular',
                component: AngularComponent,
            },
        ],
    },
];
