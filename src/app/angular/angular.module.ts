import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AngularComponent } from 'src/app/angular/components/angular/angular.component';
import { DifferenceBetweenComponentAndDirectiveComponent } from 'src/app/angular/questions/difference_between_component_and_directive/difference_between_component_and_directive.component';
import { ServiceImportComponent } from 'src/app/angular/questions/service_import/service_import.component';
import { RendererComponent } from 'src/app/angular/questions/renderer/renderer.component';
import { ProtractorComponent } from 'src/app/angular/questions/protractor/protractor.component';
import { OtherScriptsAndStylesConnectComponent } from 'src/app/angular/questions/other_scripts_and_styles_connect/other_scripts_and_styles_connect.component';
import { BootstrapInNgModuleComponent } from 'src/app/angular/questions/bootstrap_in_ng_module/bootstrap_in_ng_module.component';
import { AngularCliComponent } from 'src/app/angular/questions/angular_cli/angular_cli.component';
import { ModuleInAngularComponent } from 'src/app/angular/questions/module_in_angular/module_in_angular.component';
import { ComponentInAngularComponent } from 'src/app/angular/questions/component_in_angular/component_in_angular.component';
import { ServiceInAngularComponent } from 'src/app/angular/questions/service_in_angular/service_in_angular.component';
import { DirectiveInAngularComponent } from 'src/app/angular/questions/directive_in_angular/directive_in_angular.component';
import { CompilationMechanismsComponent } from 'src/app/angular/questions/compilation_mechanisms/compilation_mechanisms.component';
import { DataBindingMechanismsComponent } from 'src/app/angular/questions/data_binding_mechanisms/data_binding_mechanisms.component';
import { CustomEventsComponent } from 'src/app/angular/questions/custom_events/custom_events.component';
import { TwoWayBindingInFormsComponent } from 'src/app/angular/questions/two_way_binding_in_forms/two_way_binding_in_forms.component';
import { DifferenceBetweenInputAndOutputComponent } from 'src/app/angular/questions/difference_between_input_and_output/difference_between_input_and_output.component';
import { ComponentLifecycleComponent } from 'src/app/angular/questions/component_lifecycle/component_lifecycle.component';
import { DirectiveLifecycleComponent } from 'src/app/angular/questions/directive_lifecycle/directive_lifecycle.component';
import { ServiceLifecycleComponent } from 'src/app/angular/questions/service_lifecycle/service_lifecycle.component';
import { WaysOfInteractionBetweenComponentsComponent } from 'src/app/angular/questions/ways_of_interaction_between_components/ways_of_interaction_between_components.component';
import { CycleOptimizationNgforComponent } from 'src/app/angular/questions/cycle_optimization_ngfor/cycle_optimization_ngfor.component';
import { DifferenceBetweenNgcontainerAndNgtemplateComponent } from 'src/app/angular/questions/difference_between_ngcontainer_and_ngtemplate/difference_between_ngcontainer_and_ngtemplate.component';
import { CustomDirectiveComponent } from 'src/app/angular/questions/custom_directive/custom_directive.component';

import { MaterialModule } from 'src/app/shared/modules/material/material.module';
import { TitleModule } from 'src/app/shared/modules/title/title.module';

// а б в г д е ё ж з и й к л м н о п р с т у ф х ц ч ш щ ъ ы ь э ю я
// a b c d e f g h i j k l m n o p q r s t u v w x y z

const routes: Routes = [
    {
        path: 'angular',
        component: AngularComponent,
    },
];

const questions = [
    DifferenceBetweenComponentAndDirectiveComponent,
    ServiceImportComponent,
    RendererComponent,
    ProtractorComponent,
    OtherScriptsAndStylesConnectComponent,
    BootstrapInNgModuleComponent,
    AngularCliComponent,
    ModuleInAngularComponent,
    ComponentInAngularComponent,
    ServiceInAngularComponent,
    DirectiveInAngularComponent,
    CompilationMechanismsComponent,
    DataBindingMechanismsComponent,
    CustomEventsComponent,
    TwoWayBindingInFormsComponent,
    DifferenceBetweenInputAndOutputComponent,
    ComponentLifecycleComponent,
    DirectiveLifecycleComponent,
    ServiceLifecycleComponent,
    WaysOfInteractionBetweenComponentsComponent,
    CycleOptimizationNgforComponent,
    DifferenceBetweenNgcontainerAndNgtemplateComponent,
    CustomDirectiveComponent,
];

@NgModule({
    declarations: [AngularComponent, questions],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        MaterialModule,
        TitleModule,
    ],
})
export class AngularModule {}
