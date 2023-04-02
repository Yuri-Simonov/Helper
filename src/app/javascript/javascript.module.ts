import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { JavascriptComponent } from 'src/app/javascript/components/javascript/javascript.component';

import { MaterialModule } from 'src/app/shared/modules/material/material.module';
import { SidenavModule } from 'src/app/shared/modules/sidenav/sidenav.module';
import { PrototypeComponent } from './components/prototype/prototype.component';
import { TitleModule } from 'src/app/shared/modules/title/title.module';
import { AsyncComponent } from './components/async/async.component';
import { ClassComponent } from './components/class/class.component';
import { OthersComponent } from './components/others/others.component';

const routes: Routes = [
    {
        path: 'javascript',
        component: JavascriptComponent,
        children: [
            { path: 'prototype', component: PrototypeComponent },
            { path: 'async', component: AsyncComponent },
            { path: 'class', component: ClassComponent },
            { path: 'others', component: OthersComponent },
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
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        MaterialModule,
        SidenavModule,
        TitleModule,
    ],
})
export class JavascriptModule {}
