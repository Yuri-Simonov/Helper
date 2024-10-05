import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRadioModule } from '@angular/material/radio';
import { HighlightJsDirective } from 'ngx-highlight-js';

import { quizzesModuleRoutes } from './routes';

import { PipeSanitizer } from '../shared/pipes/pipe-sanitizer.pipe';

import { NextQuestionDirective } from './directives/next-question.directive';

import { AngularComponent } from './pages/angular/angular.component';
import { QuestionCardComponent } from './components/question-card/question-card.component';
import { ResultComponent } from './components/result/result.component';
import { ButtonComponent } from '../shared/ui/button/button.component';
import { TitleComponent } from '../shared/components/title/title.component';
import { QuestionsComponent } from './components/questions/questions.component';
import { JavascriptComponent } from './pages/javascript/javascript.component';

const materialModules = [MatProgressBarModule, MatRadioModule];

@NgModule({
    declarations: [
        AngularComponent,
        QuestionCardComponent,
        ResultComponent,
        NextQuestionDirective,
        QuestionsComponent,
        JavascriptComponent,
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(quizzesModuleRoutes),
        TitleComponent,
        ButtonComponent,
        materialModules,
        PipeSanitizer,
        HighlightJsDirective,
    ],
})
export class QuizzesModule {}
