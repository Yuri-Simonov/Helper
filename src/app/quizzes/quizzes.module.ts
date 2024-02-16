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

// а б в г д е ё ж з и й к л м н о п р с т у ф х ц ч ш щ ъ ы ь э ю я
// a b c d e f g h i j k l m n o p q r s t u v w x y z
const routes: Routes = [
    {
        path: 'quizzes/angular',
        component: AngularComponent,
    },
];

const materialModules = [MatProgressBarModule, MatRadioModule];

@NgModule({
    declarations: [AngularComponent, QuestionCardComponent, ResultComponent, NextQuestionDirective],
    imports: [CommonModule, RouterModule.forChild(routes), TitleComponent, ButtonComponent, materialModules],
})
export class QuizzesModule {}
