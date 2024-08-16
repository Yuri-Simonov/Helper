import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { theoryModuleRoutes } from './routes';

import { AngularComponent } from './pages/angular/angular.component';
import { GitComponent } from './pages/git/git.component';
import { JavascriptComponent } from './pages/javascript/javascript.component';
import { TitleComponent } from '../shared/components/title/title.component';
import { SpoilersComponent } from '../shared/components/spoilers/spoilers.component';
import { OthersComponent } from './pages/others/others.component';

@NgModule({
    declarations: [AngularComponent, GitComponent, JavascriptComponent, OthersComponent],
    imports: [CommonModule, RouterModule.forChild(theoryModuleRoutes), SpoilersComponent, TitleComponent],
})
export class TheoryModule {}
