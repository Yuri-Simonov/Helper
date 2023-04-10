import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AsyncComponent } from 'src/app/javascript/components/async/async.component';
import { ClassComponent } from 'src/app/javascript/components/class/class.component';
import { FunctionComponent } from 'src/app/javascript/components/function/function.component';
import { JavascriptComponent } from 'src/app/javascript/components/javascript/javascript.component';
import { OthersComponent } from 'src/app/javascript/components/others/others.component';
import { OppComponent } from 'src/app/javascript/components/opp/opp.component';
import { PrototypeComponent } from 'src/app/javascript/components/prototype/prototype.component';

import { MaterialModule } from 'src/app/shared/modules/material/material.module';
import { SidenavModule } from 'src/app/shared/modules/sidenav/sidenav.module';
import { TitleModule } from 'src/app/shared/modules/title/title.module';
import { EmptyModule } from 'src/app/shared/modules/empty/empty.module';

// а б в г д е ё ж з и й к л м н о п р с т у ф х ц ч ш щ ъ ы ь э ю я
// a b c d e f g h i j k l m n o p q r s t u v w x y z
const routes: Routes = [
    {
        path: 'javascript',
        component: JavascriptComponent,
        children: [
            { path: 'async', component: AsyncComponent },
            { path: 'class', component: ClassComponent },
            { path: 'function', component: FunctionComponent },
            { path: 'oop', component: OppComponent },
            { path: 'others', component: OthersComponent },
            { path: 'prototype', component: PrototypeComponent },
            { path: '**', redirectTo: '' },
        ],
    },
];

@NgModule({
    declarations: [
        JavascriptComponent,
        PrototypeComponent,
        AsyncComponent,
        ClassComponent,
        OthersComponent,
        OppComponent,
        FunctionComponent,
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        MaterialModule,
        SidenavModule,
        TitleModule,
        EmptyModule,
    ],
})
export class JavascriptModule {}
