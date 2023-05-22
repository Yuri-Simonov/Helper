// Импорты библиотек
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Импорт главного компонента
import { JavascriptComponent } from 'src/app/javascript/components/javascript/javascript.component';

// Импорты сторонних модулей
import { EmptyModule } from 'src/app/shared/modules/empty/empty.module';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';
import { SidenavModule } from 'src/app/shared/modules/sidenav/sidenav.module';
import { TitleModule } from 'src/app/shared/modules/title/title.module';

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
    ],
})
export class JavascriptModule {}
