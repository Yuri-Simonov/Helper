import { Routes } from '@angular/router';

import { AngularComponent } from './pages/angular/angular.component';
import { GitComponent } from './pages/git/git.component';
import { JavascriptComponent } from './pages/javascript/javascript.component';
import { OthersComponent } from './pages/others/others.component';
import { TheoryComponent } from './theory.component';

export const theoryRoutes: Routes = [
    {
        path: 'theory',
        component: TheoryComponent,
        children: [
            {
                path: 'angular',
                component: AngularComponent,
                children: [
                    { path: 'component', component: AngularComponent },
                    { path: 'change-detection', component: AngularComponent },
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
                path: 'git',
                component: GitComponent,
            },
            {
                path: 'javascript',
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
                path: 'others',
                component: OthersComponent,
            },
        ],
    },
];
