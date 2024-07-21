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

const routes: Routes = [
    {
        path: 'quizzes/angular',
        component: AngularComponent,
    },
];

const materialModules = [MatProgressBarModule, MatRadioModule];

@NgModule({
    declarations: [AngularComponent, QuestionCardComponent, ResultComponent, NextQuestionDirective, QuestionsComponent],
    imports: [CommonModule, RouterModule.forChild(routes), TitleComponent, ButtonComponent, materialModules],
})
export class QuizzesModule {}
