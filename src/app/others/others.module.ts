import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { othersModuleRoutes } from './routes';

import { HrComponent } from './pages/hr/hr.component';
import { SpoilersComponent } from '../shared/components/spoilers/spoilers.component';
import { TitleComponent } from '../shared/components/title/title.component';

@NgModule({
    declarations: [HrComponent],
    imports: [CommonModule, RouterModule.forChild(othersModuleRoutes), SpoilersComponent, TitleComponent],
    exports: [HrComponent],
})
export class OthersModule {}
