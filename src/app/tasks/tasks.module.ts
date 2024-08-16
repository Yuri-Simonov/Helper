import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { tasksModuleRoutes } from './routes';

import { TitleComponent } from '../shared/components/title/title.component';
import { SpoilersComponent } from '../shared/components/spoilers/spoilers.component';
import { JavascriptComponent } from './pages/javascript/javascript.component';

@NgModule({
    declarations: [JavascriptComponent],
    imports: [CommonModule, RouterModule.forChild(tasksModuleRoutes), SpoilersComponent, TitleComponent],
})
export class TasksModule {}
