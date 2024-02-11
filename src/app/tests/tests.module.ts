import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { MaterialModule, TitleModule } from '../shared/modules';

import { AngularComponent } from './pages/angular/angular.component';
import { QuestionCardComponent } from './components/question-card/question-card.component';
import { ResultComponent } from './components/result/result.component';

// а б в г д е ё ж з и й к л м н о п р с т у ф х ц ч ш щ ъ ы ь э ю я
// a b c d e f g h i j k l m n o p q r s t u v w x y z
const routes: Routes = [
    {
        path: 'tests/angular',
        component: AngularComponent,
    },
];

@NgModule({
    declarations: [AngularComponent, QuestionCardComponent, ResultComponent],
    imports: [CommonModule, RouterModule.forChild(routes), MaterialModule, TitleModule],
})
export class TestsModule {}
