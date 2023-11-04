import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { JavascriptComponent } from './components/javascript/javascript.component';

import {
    EmptyModule,
    MaterialModule,
    SidenavModule,
    SpoilersModule,
    TitleModule,
} from '@modules';

// а б в г д е ё ж з и й к л м н о п р с т у ф х ц ч ш щ ъ ы ь э ю я
// a b c d e f g h i j k l m n o p q r s t u v w x y z
const routes: Routes = [
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
];

@NgModule({
    declarations: [JavascriptComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        MaterialModule,
        SidenavModule,
        TitleModule,
        EmptyModule,
        SpoilersModule,
    ],
})
export class JavascriptModule {}
