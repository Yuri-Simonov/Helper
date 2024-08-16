import { Routes } from '@angular/router';

import { ForExamplesComponent } from './for-examples/for-examples/for-examples.component';

export const appModuleRoutes: Routes = [
    {
        path: 'for-examples',
        component: ForExamplesComponent,
    },
    { path: '**', redirectTo: '' },
];
