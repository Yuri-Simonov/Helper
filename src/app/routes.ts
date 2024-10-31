import { Routes } from '@angular/router';

import { ForExamplesComponent } from './for-examples/for-examples/for-examples.component';
import { SettingsComponent } from './shared/components/settings/settings.component';

export const appModuleRoutes: Routes = [
    {
        path: 'for-examples',
        component: ForExamplesComponent,
    },
    {
        path: 'settings',
        component: SettingsComponent,
    },
    { path: '**', redirectTo: '' },
];
