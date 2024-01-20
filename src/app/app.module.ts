import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { HighlightJsModule } from 'ngx-highlight-js';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { HeaderModule } from 'src/app/shared/modules/header/header.module';
import { FooterModule } from 'src/app/shared/modules/footer/footer.module';
import { HomeModule } from 'src/app/home/home.module';
import { TheoryModule } from './theory/theory.module';
import { MaterialModule, SidenavModule } from '@modules';

const routes: Routes = [{ path: '**', redirectTo: '' }];

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HeaderModule,
        HighlightJsModule,
        FooterModule,
        MaterialModule,
        HomeModule,
        SidenavModule,
        TheoryModule,
        RouterModule.forRoot(routes),
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
