import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AngularComponent } from './components/angular/angular.component';

import { SpoilersModule, TitleModule } from '@modules';

// а б в г д е ё ж з и й к л м н о п р с т у ф х ц ч ш щ ъ ы ь э ю я
// a b c d e f g h i j k l m n o p q r s t u v w x y z
const routes: Routes = [
    {
        path: 'theory/angular',
        component: AngularComponent,
        children: [
            { path: 'component', component: AngularComponent },
            { path: 'decorator', component: AngularComponent },
            { path: 'directive', component: AngularComponent },
            { path: 'form', component: AngularComponent },
            { path: 'ngrx', component: AngularComponent },
            { path: 'others', component: AngularComponent },
            { path: 'pipe', component: AngularComponent },
            { path: 'routing', component: AngularComponent },
            { path: 'rxjs', component: AngularComponent },
            { path: 'service', component: AngularComponent },
            { path: 'test', component: AngularComponent },
            { path: '**', redirectTo: '' },
        ],
    },
];

@NgModule({
    declarations: [AngularComponent],
    imports: [CommonModule, RouterModule.forChild(routes), SpoilersModule, TitleModule],
    providers: [],
})
export class AngularModule {}
