import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from '../shared/components/footer/footer.component';
import { NgClass, NgTemplateOutlet } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        pathMatch: 'full',
    },
];

const materialModules = [MatButtonModule, MatMenuModule];

@NgModule({
    declarations: [HomeComponent],
    imports: [RouterModule.forChild(routes), FooterComponent, materialModules, NgClass, NgTemplateOutlet],
})
export class HomeModule {}
