import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { HeaderModule } from 'src/app/shared/modules/header/header.module';
import { FooterModule } from 'src/app/shared/modules/footer/footer.module';
import { JavascriptModule } from 'src/app/theory/javascript/javascript.module';
import { AngularModule } from 'src/app/theory/angular/angular.module';
import { GitModule } from 'src/app/theory/git/git.module';
import { HomeModule } from 'src/app/home/home.module';
import { MaterialModule, SidenavModule } from '@modules';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HeaderModule,
        FooterModule,
        JavascriptModule,
        AngularModule,
        GitModule,
        MaterialModule,
        HomeModule,
        SidenavModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
