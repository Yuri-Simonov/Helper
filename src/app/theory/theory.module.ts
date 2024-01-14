import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OthersModule } from './others/others.module';
import { JavascriptModule } from './javascript/javascript.module';
import { AngularModule } from './angular/angular.module';
import { GitModule } from './git/git.module';

@NgModule({
    declarations: [],
    imports: [CommonModule, OthersModule, JavascriptModule, AngularModule, GitModule],
})
export class TheoryModule {}
