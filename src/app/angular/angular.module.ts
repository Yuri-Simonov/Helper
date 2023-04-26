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
import { RxjsComponent } from './components/rxjs/rxjs.component';
import { ServiceComponent } from 'src/app/angular/components/service/service.component';
import { TestComponent } from 'src/app/angular/components/test/test.component';

// Импорты компонентов с вопросами по компонентам
import { ComponentInAngularComponent } from 'src/app/angular/questions/component/component_in_angular/component_in_angular.component';
import { ComponentLifecycleComponent } from 'src/app/angular/questions/component/component_lifecycle/component_lifecycle.component';
import { OndestroyComponent } from 'src/app/angular/questions/component/ondestroy/ondestroy.component';
import { WaysOfInteractionBetweenComponentsComponent } from 'src/app/angular/questions/component/ways_of_interaction_between_components/ways_of_interaction_between_components.component';
// Импорты компонентов с вопросами по декораторам
import { BootstrapInNgModuleComponent } from 'src/app/angular/questions/decorator/bootstrap_in_ng_module/bootstrap_in_ng_module.component';
import { DecoratorInjectableComponent } from 'src/app/angular/questions/decorator/decorator_injectable/decorator_injectable.component';
import { DecoratorOptionalComponent } from 'src/app/angular/questions/decorator/decorator_optional/decorator_optional.component';
import { DecoratorSkipselfComponent } from 'src/app/angular/questions/decorator/decorator_skipself/decorator_skipself.component';
import { DifferenceBetweenInputAndOutputComponent } from 'src/app/angular/questions/decorator/difference_between_input_and_output/difference_between_input_and_output.component';
import { ObjectPropsInDecoratorInputComponent } from './questions/decorator/object_props_in_decorator_input/object_props_in_decorator_input.component';
// Импорты компонентов с вопросами по директивам
import { CustomDirectiveComponent } from 'src/app/angular/questions/directive/custom_directive/custom_directive.component';
import { DifferenceBetweenComponentAndDirectiveComponent } from 'src/app/angular/questions/directive/difference_between_component_and_directive/difference_between_component_and_directive.component';
import { DirectiveInAngularComponent } from 'src/app/angular/questions/directive/directive_in_angular/directive_in_angular.component';
import { DirectiveLifecycleComponent } from 'src/app/angular/questions/directive/directive_lifecycle/directive_lifecycle.component';
// Импорты компонентов с вопросами по формам
import { FormsInAngularComponent } from 'src/app/angular/questions/form/forms_in_angular/forms_in_angular.component';
import { FormParentClassesComponent } from 'src/app/angular/questions/form/form_parent_classes/form_parent_classes.component';
import { TwoWayBindingInFormsComponent } from 'src/app/angular/questions/form/two_way_binding_in_forms/two_way_binding_in_forms.component';
// Импорты компонентов с вопросами по разным вопросам
import { AngularCliComponent } from 'src/app/angular/questions/others/angular_cli/angular_cli.component';
import { CompilationMechanismsComponent } from 'src/app/angular/questions/others/compilation_mechanisms/compilation_mechanisms.component';
import { CustomEventsComponent } from 'src/app/angular/questions/others/custom_events/custom_events.component';
import { ChangeDetectionComponent } from 'src/app/angular/questions/others/change_detection/change_detection.component';
import { ChangeDetectionRefComponent } from 'src/app/angular/questions/others/change_detection_ref/change_detection_ref.component';
import { CycleOptimizationNgforComponent } from 'src/app/angular/questions/others/cycle_optimization_ngfor/cycle_optimization_ngfor.component';
import { DataBindingMechanismsComponent } from 'src/app/angular/questions/others/data_binding_mechanisms/data_binding_mechanisms.component';
import { DependencyInjectionComponent } from 'src/app/angular/questions/others/dependency_injection/dependency_injection.component';
import { DifferenceBetweenNgcontainerAndNgtemplateComponent } from 'src/app/angular/questions/others/difference_between_ngcontainer_and_ngtemplate/difference_between_ngcontainer_and_ngtemplate.component';
import { ModuleInAngularComponent } from 'src/app/angular/questions/others/module_in_angular/module_in_angular.component';
import { OtherScriptsAndStylesConnectComponent } from 'src/app/angular/questions/others/other_scripts_and_styles_connect/other_scripts_and_styles_connect.component';
import { RendererComponent } from 'src/app/angular/questions/others/renderer/renderer.component';
// Импорты компонентов с вопросами по пайпам
import { CustomPipeComponent } from 'src/app/angular/questions/pipe/custom_pipe/custom_pipe.component';
import { DifferenceBetweenPureAndImpurePipesComponent } from 'src/app/angular/questions/pipe/difference_between_pure_and_impure_pipes/difference_between_pure_and_impure_pipes.component';
import { PipeInAngularComponent } from 'src/app/angular/questions/pipe/pipe_in_angular/pipe_in_angular.component';
// Импорты компонентов с вопросами по библиотеке RxJs
import { DifferenceBetweenObservableAndPromiseComponent } from 'src/app/angular/questions/rxjs/difference_between_observable_and_promise/difference_between_observable_and_promise.component';
import { DifferenceBetweenObservableAndSubjectComponent } from 'src/app/angular/questions/rxjs/difference_between_observable_and_subject/difference_between_observable_and_subject.component';
import { FromPrimitiveToObservableComponent } from 'src/app/angular/questions/rxjs/from_primitive_to_observable/from_primitive_to_observable.component';
import { ObservableInAngularComponent } from 'src/app/angular/questions/rxjs/observable_in_angular/observable_in_angular.component';
import { RxjsInAngularComponent } from 'src/app/angular/questions/rxjs/rxjs_in_angular/rxjs_in_angular.component';
// Импорты компонентов с вопросами по сервисам
import { ServiceImportComponent } from 'src/app/angular/questions/service/service_import/service_import.component';
import { ServiceInAngularComponent } from 'src/app/angular/questions/service/service_in_angular/service_in_angular.component';
import { ServiceLifecycleComponent } from 'src/app/angular/questions/service/service_lifecycle/service_lifecycle.component';
// Импорты компонентов с вопросами по тестированию
import { ProtractorComponent } from 'src/app/angular/questions/test/protractor/protractor.component';

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
            { path: 'rxjs', component: RxjsComponent },
            { path: 'service', component: ServiceComponent },
            { path: 'test', component: TestComponent },
            { path: '**', redirectTo: '' },
        ],
    },
];

// Вопросы по компонентам
const questionsComponent = [
    ComponentInAngularComponent,
    ComponentLifecycleComponent,
    OndestroyComponent,
    WaysOfInteractionBetweenComponentsComponent,
];
// Вопросы по декораторам
const questionsDecorator = [
    BootstrapInNgModuleComponent,
    DecoratorInjectableComponent,
    DecoratorOptionalComponent,
    DecoratorSkipselfComponent,
    DifferenceBetweenInputAndOutputComponent,
    ObjectPropsInDecoratorInputComponent,
];
// Вопросы по директивам
const questionsDirective = [
    CustomDirectiveComponent,
    DifferenceBetweenComponentAndDirectiveComponent,
    DirectiveInAngularComponent,
    DirectiveLifecycleComponent,
];
// Вопросы по формам
const questionsForm = [
    FormsInAngularComponent,
    FormParentClassesComponent,
    TwoWayBindingInFormsComponent,
];
// Вопросы по разным вопросам
const questionsOthers = [
    AngularCliComponent,
    CompilationMechanismsComponent,
    CustomEventsComponent,
    ChangeDetectionComponent,
    ChangeDetectionRefComponent,
    CycleOptimizationNgforComponent,
    DataBindingMechanismsComponent,
    DependencyInjectionComponent,
    DifferenceBetweenNgcontainerAndNgtemplateComponent,
    ModuleInAngularComponent,
    OtherScriptsAndStylesConnectComponent,
    RendererComponent,
];
// Вопросы по пайпам
const questionsPipe = [
    CustomPipeComponent,
    DifferenceBetweenPureAndImpurePipesComponent,
    PipeInAngularComponent,
];
// Вопросы по библиотеке RxJs

const questionsRxJs = [
    DifferenceBetweenObservableAndPromiseComponent,
    DifferenceBetweenObservableAndSubjectComponent,
    FromPrimitiveToObservableComponent,
    ObservableInAngularComponent,
    RxjsInAngularComponent,
];
// Вопросы по сервисам
const questionsService = [
    ServiceImportComponent,
    ServiceInAngularComponent,
    ServiceLifecycleComponent,
];
// Вопросы по тестированию
const questionsTest = [ProtractorComponent];

// Хранилище всех разделов вопросов
const questions = [
    questionsComponent,
    questionsDecorator,
    questionsDirective,
    questionsForm,
    questionsOthers,
    questionsPipe,
    questionsRxJs,
    questionsService,
    questionsTest,
];

@NgModule({
    declarations: [
        questions,
        AngularComponent,
        ComponentComponent,
        DecoratorComponent,
        DirectiveComponent,
        FormComponent,
        OthersComponent,
        PipeComponent,
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
