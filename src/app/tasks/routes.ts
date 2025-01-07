import { Routes } from '@angular/router';

import { JavascriptComponent } from './pages/javascript/javascript.component';
import { TasksComponent } from './tasks.component';

export const tasksRoutes: Routes = [
    {
        path: 'tasks',
        component: TasksComponent,
        children: [
            {
                path: 'javascript',
                component: JavascriptComponent,
            },
        ],
    },
];
