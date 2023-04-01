import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AngularComponent } from 'src/app/angular/components/angular/angular.component';

const routes: Routes = [
    {
        path: 'angular',
        component: AngularComponent,
    },
];

@NgModule({
    declarations: [AngularComponent],
    imports: [CommonModule, RouterModule.forChild(routes)],
})
export class AngularModule {}
