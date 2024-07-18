import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRadioModule } from '@angular/material/radio';

import { NextQuestionDirective } from './directives/next-question.directive';

import { AngularComponent } from './pages/angular/angular.component';
import { QuestionCardComponent } from './components/question-card/question-card.component';
import { ResultComponent } from './components/result/result.component';
import { ButtonComponent } from '../shared/ui/button/button.component';
import { TitleComponent } from '../shared/components/title/title.component';
import { QuestionsComponent } from './components/questions/questions.component';
import { JavascriptComponent } from './pages/javascript/javascript.component';

const routes: Routes = [
    {
        path: 'quizzes/angular',
        component: AngularComponent,
    },
    {
        path: 'quizzes/javascript',
        component: JavascriptComponent,
    },
];

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
    imports: [CommonModule, RouterModule.forChild(routes), TitleComponent, ButtonComponent, materialModules],
})
export class QuizzesModule {}
