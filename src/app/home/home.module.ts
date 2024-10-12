import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from '../shared/components/footer/footer.component';
import { NgClass } from '@angular/common';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        pathMatch: 'full',
    },
];

const materialModules = [MatButtonModule];

@NgModule({
    declarations: [HomeComponent],
    imports: [RouterModule.forChild(routes), FooterComponent, materialModules, NgClass],
})
export class HomeModule {}
