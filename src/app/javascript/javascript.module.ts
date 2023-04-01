import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { JavascriptComponent } from 'src/app/javascript/components/javascript/javascript.component';

const routes: Routes = [
    {
        path: 'javascript',
        component: JavascriptComponent,
    },
];

@NgModule({
    declarations: [JavascriptComponent],
    imports: [CommonModule, RouterModule.forChild(routes)],
})
export class JavascriptModule {}
