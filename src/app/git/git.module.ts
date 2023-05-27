import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { GitComponent } from './components/git/git.component';

const routes: Routes = [
    {
        path: 'git',
        component: GitComponent,
    },
];

@NgModule({
    declarations: [GitComponent],
    imports: [CommonModule, RouterModule.forChild(routes)],
})
export class GitModule {}
