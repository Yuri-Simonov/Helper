import { LocalStorageService } from '../../shared/services/local-storage.service';
import { Injectable } from '@angular/core';

import { IBackground } from '../interfaces/background.interface';

const BACKGROUND = 'background';

@Injectable({
    providedIn: 'root',
})
export class BackgroundToggleService {
    appRoot: HTMLElement | null;
    backgrounds: IBackground[] = [
        { name: 'По умолчанию', code: 'default' },
        { name: 'Новогодний', code: 'new-year' },
        { name: 'Волновой', code: 'wave' },
        { name: 'Без изображения', code: 'none' },
    ];
    currentBackground: IBackground = this.backgrounds[0];

    constructor(private localStorageService: LocalStorageService) {}

    setCurrentBackground() {
        this.appRoot = document.querySelector('app-root');
        if (this.localStorageService.get(BACKGROUND)) {
            const localStorageBackground = this.localStorageService.get(BACKGROUND);
            this.appRoot!.style.backgroundImage = this.setBackgroundStyle(localStorageBackground.code);
            this.currentBackground = localStorageBackground;
        } else {
            this.appRoot!.style.backgroundImage = this.setBackgroundStyle(this.backgrounds[0].code);
            this.localStorageService.set(BACKGROUND, this.currentBackground);
        }
    }

    changeCurrentBackground(newBackground: IBackground) {
        if (this.currentBackground.code !== newBackground.code) {
            this.appRoot!.style.backgroundImage = this.setBackgroundStyle(newBackground.code);
            this.currentBackground = newBackground;
            this.localStorageService.set(BACKGROUND, newBackground);
        }
    }

    setBackgroundStyle(code: string) {
        if (code === 'none') {
            return (this.appRoot!.style.backgroundImage =
                'linear-gradient(var(--primary-color), var(--secondary-color))');
        }
        return (this.appRoot!.style.backgroundImage = `url("assets/img/common/${code}-background.png"), linear-gradient(var(--primary-color), var(--secondary-color))`);
    }
}
