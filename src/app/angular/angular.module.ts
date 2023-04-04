import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AngularComponent } from 'src/app/angular/components/angular/angular.component';

import { MaterialModule } from 'src/app/shared/modules/material/material.module';
import { TitleModule } from 'src/app/shared/modules/title/title.module';

const routes: Routes = [
    {
        path: 'angular',
        component: AngularComponent,
    },
];

@NgModule({
    declarations: [AngularComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        MaterialModule,
        TitleModule,
    ],
})
export class AngularModule {}
