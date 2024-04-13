import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForExamplesComponent } from './for-examples/for-examples/for-examples.component';

const routes: Routes = [
    {
        path: 'for-examples',
        component: ForExamplesComponent,
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
