import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AngularComponent } from './pages/angular/angular.component';
import { GitComponent } from './pages/git/git.component';
import { JavascriptComponent } from './pages/javascript/javascript.component';
import { OthersComponent } from './pages/others/others.component';

const routes: Routes = [
    {
        path: 'theory/angular',
        component: AngularComponent,
        children: [
            { path: 'component', component: AngularComponent },
            { path: 'changeDetection', component: AngularComponent },
            { path: 'decorator', component: AngularComponent },
            { path: 'directive', component: AngularComponent },
            { path: 'form', component: AngularComponent },
            { path: 'ngrx', component: AngularComponent },
            { path: 'others', component: AngularComponent },
            { path: 'pipe', component: AngularComponent },
            { path: 'routing', component: AngularComponent },
            { path: 'rxjs', component: AngularComponent },
            { path: 'rxjs-operators', component: AngularComponent },
            { path: 'service', component: AngularComponent },
            { path: 'test', component: AngularComponent },
            { path: '**', redirectTo: '' },
        ],
    },
    {
        path: 'theory/git',
        component: GitComponent,
    },
    {
        path: 'theory/javascript',
        component: JavascriptComponent,
        children: [
            { path: 'async', component: JavascriptComponent },
            { path: 'class', component: JavascriptComponent },
            { path: 'function', component: JavascriptComponent },
            { path: 'oop', component: JavascriptComponent },
            { path: 'others', component: JavascriptComponent },
            { path: 'prototype', component: JavascriptComponent },
            { path: '**', redirectTo: '' },
        ],
    },
    {
        path: 'theory/others',
        component: OthersComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class TheoryRoutingModule {}
