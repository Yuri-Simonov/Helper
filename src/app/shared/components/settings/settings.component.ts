import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { ThemeToggleService } from '../../services/theme-toggle.service';

import { IBackground, ITheme } from '../../types';

import { TitleComponent } from '../title/title.component';
import { BackgroundToggleService } from '../../services/background-toggle.service';

const materialModules = [MatSelectModule, MatInputModule];

@Component({
    selector: 'app-settings',
    standalone: true,
    imports: [materialModules, ReactiveFormsModule, TitleComponent],
    templateUrl: './settings.component.html',
    styleUrl: './settings.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SettingsComponent {
    themes: ITheme[];
    currentTheme: FormControl<ITheme> = new FormControl(this.themeToggleService.currentTheme) as FormControl<ITheme>;
    backgrounds: ITheme[];
    currentBackground: FormControl<IBackground> = new FormControl(
        this.backgroundToggleService.currentBackground,
    ) as FormControl<IBackground>;
    settingsForm: FormGroup;

    constructor(
        private themeToggleService: ThemeToggleService,
        private backgroundToggleService: BackgroundToggleService,
        private formBuilder: FormBuilder,
    ) {
        this.settingsForm = this.formBuilder.group({
            theme: this.themeToggleService.currentTheme.code,
            closeAllSpoilersButton: `Esc`,
            background: this.backgroundToggleService.currentBackground.code,
        });
        // Дизейбл инпута задания клавиши для быстрого закрытия всех споилеров
        this.settingsForm.get('closeAllSpoilersButton')?.disable();
    }

    ngOnInit() {
        this.themes = this.themeToggleService.themes;
        this.currentTheme.setValue(this.themeToggleService.currentTheme);
        this.backgrounds = this.backgroundToggleService.backgrounds;
        this.currentBackground.setValue(this.backgroundToggleService.currentBackground);
    }

    changeTheme(newTheme: ITheme) {
        this.themeToggleService.changeCurrentTheme(newTheme);
    }

    changeBackground(background: IBackground) {
        this.backgroundToggleService.changeCurrentBackground(background);
    }
}
