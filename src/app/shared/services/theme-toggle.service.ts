import { LocalStorageService } from './local-storage.service';
import { Injectable } from '@angular/core';

import { ITheme } from '../types';

const THEME = 'theme';

@Injectable({
    providedIn: 'root',
})
export class ThemeToggleService {
    html: HTMLHtmlElement | null;
    themes: ITheme[] = [
        { name: 'Красная', code: 'red-theme' },
        { name: 'Розовая', code: 'pink-theme' },
        { name: 'Фиолетовая', code: 'purple-theme' },
        { name: 'Фиолетовая (Насыщенная)', code: 'deep-purple-theme' },
        { name: 'Индиго', code: 'indigo-theme' },
        { name: 'Синяя', code: 'blue-theme' },
        { name: 'Аквамариновая', code: 'teal-theme' },
        { name: 'Коричневая', code: 'brown-theme' },
        { name: 'Серо-голубая', code: 'blue-gray-theme' },
    ];
    currentTheme: ITheme = this.themes[2];

    constructor(private localStorageService: LocalStorageService) {}

    setCurrentTheme() {
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
