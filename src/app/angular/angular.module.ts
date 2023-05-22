// Импорты библиотек
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// Импорт главного компонента
import { AngularComponent } from 'src/app/angular/components/angular/angular.component';

// Импорты сторонних модулей
import { EmptyModule } from 'src/app/shared/modules/empty/empty.module';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';
import { SidenavModule } from 'src/app/shared/modules/sidenav/sidenav.module';
import { TitleModule } from 'src/app/shared/modules/title/title.module';

// а б в г д е ё ж з и й к л м н о п р с т у ф х ц ч ш щ ъ ы ь э ю я
// a b c d e f g h i j k l m n o p q r s t u v w x y z
const routes: Routes = [
    {
        path: 'angular',
        component: AngularComponent,
        children: [
            { path: 'component', component: AngularComponent },
            { path: 'decorator', component: AngularComponent },
            { path: 'directive', component: AngularComponent },
            { path: 'form', component: AngularComponent },
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
    imports: [
        CommonModule,
        EmptyModule,
        MaterialModule,
        RouterModule.forChild(routes),
        SidenavModule,
        TitleModule,
    ],
    providers: [],
})
export class AngularModule {}
