// Импорты библиотек
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Импорты компонентов разделов
import { AsyncComponent } from 'src/app/javascript/components/async/async.component';
import { ClassComponent } from 'src/app/javascript/components/class/class.component';
import { FunctionComponent } from 'src/app/javascript/components/function/function.component';
import { JavascriptComponent } from 'src/app/javascript/components/javascript/javascript.component';
import { OthersComponent } from 'src/app/javascript/components/others/others.component';
import { OppComponent } from 'src/app/javascript/components/opp/opp.component';
import { PrototypeComponent } from 'src/app/javascript/components/prototype/prototype.component';

// Импорты компонентов с вопросами по функциям
import { AccessingGlobalVariablesInsideAFunctionComponent } from 'src/app/javascript/questions/function/accessing_global_variables_inside_a_function/accessing_global_variables_inside_a_function.component';
import { CallFunctionDeclarationBeforeDefinitionComponent } from 'src/app/javascript/questions/function/call_function_declaration_before_definition/call_function_declaration_before_definition.component';
import { ClosureInJsComponent } from 'src/app/javascript/questions/function/closure_in_js/closure_in_js.component';
import { OneFunctionCallOneLexicalEnvironmentComponent } from 'src/app/javascript/questions/function/one_function_call_one_lexical_environment/one_function_call_one_lexical_environment.component';
// Импорты компонентов с вопросами по прототипам
import { ObjectPrototypeOfAnotherObjectComponent } from 'src/app/javascript/questions/prototype/object_prototype_of_another_object/object_prototype_of_another_object.component';
import { OwnMethodOrPropertyInPrototypeComponent } from 'src/app/javascript/questions/prototype/own_method_or_property_in_prototype/own_method_or_property_in_prototype.component';
import { PrototypeChainComponent } from 'src/app/javascript/questions/prototype/prototype_chain/prototype_chain.component';
import { PrototypeChainEndComponent } from 'src/app/javascript/questions/prototype/prototype_chain_end/prototype_chain_end.component';
import { PrototypeInJsComponent } from 'src/app/javascript/questions/prototype/prototype_in_js/prototype_in_js.component';

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

// Вопросы по функциям
const questionsFunction = [
    AccessingGlobalVariablesInsideAFunctionComponent,
    CallFunctionDeclarationBeforeDefinitionComponent,
    ClosureInJsComponent,
    OneFunctionCallOneLexicalEnvironmentComponent,
];
// Вопросы по прототипам
const questionsPrototype = [
    ObjectPrototypeOfAnotherObjectComponent,
    OwnMethodOrPropertyInPrototypeComponent,
    PrototypeChainComponent,
    PrototypeChainEndComponent,
    PrototypeInJsComponent,
];
// Хранилище всех разделов вопросов
const questions = [questionsFunction, questionsPrototype];

@NgModule({
    declarations: [
        questions,
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
