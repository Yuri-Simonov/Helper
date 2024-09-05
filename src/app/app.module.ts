import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HighlightJsModule } from 'ngx-highlight-js';
import { ToastrModule } from 'ngx-toastr';

import { appModuleRoutes } from './routes';

import { AppComponent } from './app.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';

import { HomeModule } from 'src/app/home/home.module';
import { QuizzesModule } from './quizzes/quizzes.module';
import { TheoryModule } from './theory/theory.module';
import { TasksModule } from './tasks/tasks.module';
import { OthersModule } from './others/others.module';

const MODULES = [HomeModule, QuizzesModule, TheoryModule, TasksModule, OthersModule];

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(appModuleRoutes),
        ToastrModule.forRoot(),
        HighlightJsModule,
        HeaderComponent,
        FooterComponent,
        SidebarComponent,
        ...MODULES,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
