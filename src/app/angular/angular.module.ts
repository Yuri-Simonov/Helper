// Импорты библиотек
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// Импорты компонентов разделов
import { AngularComponent } from 'src/app/angular/components/angular/angular.component';
import { ComponentComponent } from 'src/app/angular/components/component/component.component';
import { DecoratorComponent } from 'src/app/angular/components/decorator/decorator.component';
import { DirectiveComponent } from 'src/app/angular/components/directive/directive.component';
import { FormComponent } from 'src/app/angular/components/form/form.component';
import { OthersComponent } from 'src/app/angular/components/others/others.component';
import { PipeComponent } from 'src/app/angular/components/pipe/pipe.component';
import { RoutingComponent } from 'src/app/angular/components/routing/routing.component';
import { RxjsComponent } from 'src/app/angular/components/rxjs/rxjs.component';
import { ServiceComponent } from 'src/app/angular/components/service/service.component';
import { TestComponent } from 'src/app/angular/components/test/test.component';

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
            { path: 'component', component: ComponentComponent },
            { path: 'decorator', component: DecoratorComponent },
            { path: 'directive', component: DirectiveComponent },
            { path: 'form', component: FormComponent },
            { path: 'others', component: OthersComponent },
            { path: 'pipe', component: PipeComponent },
            { path: 'routing', component: RoutingComponent },
            { path: 'rxjs', component: RxjsComponent },
            { path: 'service', component: ServiceComponent },
            { path: 'test', component: TestComponent },
            { path: '**', redirectTo: '' },
        ],
    },
];

@NgModule({
    declarations: [
        AngularComponent,
        ComponentComponent,
        DecoratorComponent,
        DirectiveComponent,
        FormComponent,
        OthersComponent,
        PipeComponent,
        RoutingComponent,
        RxjsComponent,
        ServiceComponent,
        TestComponent,
    ],
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
