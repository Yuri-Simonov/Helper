import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { JavascriptComponent } from 'src/app/javascript/components/javascript/javascript.component';

import { MaterialModule } from 'src/app/shared/modules/material/material.module';
import { SidenavModule } from 'src/app/shared/modules/sidenav/sidenav.module';

const routes: Routes = [
    {
        path: 'javascript',
        component: JavascriptComponent,
    },
];

@NgModule({
    declarations: [JavascriptComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        MaterialModule,
        SidenavModule,
    ],
})
export class JavascriptModule {}
