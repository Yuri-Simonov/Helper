import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AngularComponent } from './pages/angular/angular.component';
import { GitComponent } from './pages/git/git.component';
import { JavascriptComponent } from './pages/javascript/javascript.component';

// а б в г д е ё ж з и й к л м н о п р с т у ф х ц ч ш щ ъ ы ь э ю я
// a b c d e f g h i j k l m n o p q r s t u v w x y z
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
        path: 'theory/git/all',
        component: GitComponent,
        // children: [{ path: 'all', component: GitComponent }],
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
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class TheoryRoutingModule {}
