import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { codeReviewModuleRoutes } from './routes';

import { TitleComponent } from '../shared/components/title/title.component';
import { SpoilersComponent } from '../shared/components/spoilers/spoilers.component';
import { AngularComponent } from './pages/angular/angular.component';

@NgModule({
    declarations: [AngularComponent],
    imports: [RouterModule.forChild(codeReviewModuleRoutes), SpoilersComponent, TitleComponent],
})
export class CodeReviewModule {}
