import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TheoryRoutingModule } from './theory-routing.module';

import { AngularComponent } from './pages/angular/angular.component';
import { GitComponent } from './pages/git/git.component';
import { JavascriptComponent } from './pages/javascript/javascript.component';
import { TitleComponent } from '../shared/components/title/title.component';
import { SpoilersComponent } from '../shared/components/spoilers/spoilers.component';
import { OthersComponent } from './pages/others/others.component';

@NgModule({
    declarations: [AngularComponent, GitComponent, JavascriptComponent, OthersComponent],
    imports: [CommonModule, TheoryRoutingModule, SpoilersComponent, TitleComponent],
})
export class TheoryModule {}
