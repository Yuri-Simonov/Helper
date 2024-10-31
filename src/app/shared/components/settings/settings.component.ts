import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { ThemeToggleService } from '../../services/theme-toggle.service';

import { ITheme } from '../../types';

import { TitleComponent } from '../title/title.component';

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
    currentTheme: FormControl<ITheme> = new FormControl({ name: 'Красная', code: 'red-theme' }) as FormControl<ITheme>;
    panelColor = new FormControl('red');
    settingsForm: FormGroup;

    constructor(
        private themeToggleService: ThemeToggleService,
        private formBuilder: FormBuilder,
    ) {
        this.settingsForm = this.formBuilder.group({
            theme: this.themeToggleService.currentTheme.code,
            closeAllSpoilersButton: `Esc`,
        });
        // Дизейбл инпута задания клавиши для быстрого закрытия всех споилеров
        this.settingsForm.get('closeAllSpoilersButton')?.disable();
    }

    ngOnInit() {
        this.themes = this.themeToggleService.themes;
        this.currentTheme.setValue(this.themeToggleService.currentTheme);
    }

    changeTheme(newTheme: ITheme) {
        this.themeToggleService.changeCurrentTheme(newTheme);
    }
}
