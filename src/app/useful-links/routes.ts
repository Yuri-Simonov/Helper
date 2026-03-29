import { Routes } from '@angular/router';

import { UsefulLinksComponent } from './useful-links.component';
import { RxJsComponent } from './pages/others/rx-js.component';

export const usefulLinksRoutes: Routes = [
    {
        path: 'useful-links',
        component: UsefulLinksComponent,
        children: [
            {
                path: 'others',
                component: RxJsComponent,
            },
        ],
    },
];
