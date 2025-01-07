import { Routes } from '@angular/router';

import { HrComponent } from './pages/hr/hr.component';
import { OthersComponent } from './others.component';

export const othersRoutes: Routes = [
    {
        path: 'others',
        component: OthersComponent,
        children: [
            {
                path: 'hr',
                component: HrComponent,
            },
        ],
    },
];
