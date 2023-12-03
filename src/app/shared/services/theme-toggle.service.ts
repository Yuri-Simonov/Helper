import { LocalStorageService } from './local_storage.service';
import { Injectable } from '@angular/core';

import { ITheme } from '../types';

const THEME = 'theme';

@Injectable({
    providedIn: 'root',
})
export class ThemeToggleService {
    html: HTMLHtmlElement | null;
    themes: ITheme[] = [
        { name: 'Розовый и черный', code: 'pink-black-theme' },
        { name: 'Оранжевый и черный', code: 'orange-black-theme' },
        { name: 'Аквамариновый и черный', code: 'teal-black-theme' },
    ];
    currentTheme: ITheme = this.themes[0];

    constructor(private localStorageService: LocalStorageService) {
        this.html = document.querySelector('html');
        if (this.localStorageService.get(THEME)) {
            const localStorageTheme = this.localStorageService.get(THEME);
            this.html?.classList.add(localStorageTheme.code);
            this.currentTheme = localStorageTheme;
        } else {
            this.html?.classList.add(this.currentTheme.code);
            this.localStorageService.set(THEME, this.currentTheme);
        }
    }

    changeCurrentTheme(newTheme: ITheme) {
        if (this.currentTheme.code !== newTheme.code) {
            this.html?.classList.remove(this.currentTheme.code);
            this.html?.classList.add(newTheme.code);
            this.currentTheme = newTheme;
            this.localStorageService.set(THEME, newTheme);
        }
    }
}
