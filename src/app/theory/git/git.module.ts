import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { GitComponent } from './components/git/git.component';

import { SpoilersModule, TitleModule } from '@modules';

const routes: Routes = [
    {
        path: 'theory/git/all',
        component: GitComponent,
        // children: [{ path: 'all', component: GitComponent }],
    },
];

@NgModule({
    declarations: [GitComponent],
    imports: [CommonModule, RouterModule.forChild(routes), TitleModule, SpoilersModule],
})
export class GitModule {}
