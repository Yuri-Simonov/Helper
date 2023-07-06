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

import { Directives } from 'src/app/shared/directives/directive.module';

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
        Directives,
    ],
})
export class GitModule {}
