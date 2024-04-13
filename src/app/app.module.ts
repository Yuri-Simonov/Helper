import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { HighlightJsModule } from 'ngx-highlight-js';

import { AppComponent } from './app.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';

import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from 'src/app/home/home.module';
import { QuizzesModule } from './quizzes/quizzes.module';
import { TheoryModule } from './theory/theory.module';

const routes: Routes = [{ path: '**', redirectTo: '' }];

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HeaderComponent,
        HighlightJsModule,
        FooterComponent,
        HomeModule,
        SidebarComponent,
        QuizzesModule,
        TheoryModule,
        RouterModule.forRoot(routes),
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
