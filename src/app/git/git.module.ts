import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { GitComponent } from './components/git/git.component';

import {
    EmptyModule,
    MaterialModule,
    SidenavModule,
    TitleModule,
} from '@modules';

const routes: Routes = [
    {
        path: 'git',
        component: GitComponent,
        children: [{ path: 'all', component: GitComponent }],
    },
];

@NgModule({
    declarations: [GitComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        MaterialModule,
        SidenavModule,
        TitleModule,
        EmptyModule,
    ],
})
export class GitModule {}
