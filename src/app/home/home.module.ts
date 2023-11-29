import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';

import { FooterModule, MaterialModule } from '@modules';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        pathMatch: 'full',
    },
];

@NgModule({
    declarations: [HomeComponent],
    imports: [CommonModule, RouterModule.forChild(routes), MaterialModule, FooterModule],
})
export class HomeModule {}
