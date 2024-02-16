import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TheoryRoutingModule } from './theory-routing.module';
import { SpoilersModule, TitleModule } from '../shared/modules';

import { AngularComponent } from './pages/angular/angular.component';
import { GitComponent } from './pages/git/git.component';
import { JavascriptComponent } from './pages/javascript/javascript.component';

@NgModule({
    declarations: [AngularComponent, GitComponent, JavascriptComponent],
    imports: [CommonModule, TheoryRoutingModule, SpoilersModule, TitleModule],
})
export class TheoryModule {}
