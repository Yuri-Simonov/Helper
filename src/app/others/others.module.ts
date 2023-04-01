import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { OthersComponent } from 'src/app/others/components/others/others.component';

const routes: Routes = [
    {
        path: 'others',
        component: OthersComponent,
    },
];

@NgModule({
    declarations: [OthersComponent],
    imports: [CommonModule, RouterModule.forChild(routes)],
})
export class OthersModule {}
