import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from 'src/app/home/components/home/home.component';

import { TitleModule } from 'src/app/shared/modules/title/title.module';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        pathMatch: 'full',
    },
];

@NgModule({
    declarations: [HomeComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        TitleModule,
        MaterialModule,
    ],
})
export class HomeModule {}
