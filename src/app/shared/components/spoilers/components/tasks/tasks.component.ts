import { Component, Input, ViewChild } from '@angular/core';
import { NgClass } from '@angular/common';
import { MatExpansionModule, MatExpansionPanel } from '@angular/material/expansion';
import { HighlightJsDirective } from 'ngx-highlight-js';

import { ITasks } from '../../../../interfaces';

import { PipeSanitizer } from '../../../../pipes/pipe-sanitizer.pipe';

import { CloseSpoilersDirective } from '../../directives/close-spoilers.directive';

const materialModules = [MatExpansionModule];

@Component({
    selector: 'app-tasks',
    imports: [materialModules, PipeSanitizer, HighlightJsDirective, NgClass, CloseSpoilersDirective],
    templateUrl: './tasks.component.html',
    styleUrl: './tasks.component.scss'
})
export class TasksComponent {
    @Input('tasks') tasksProps: ITasks[] = [];

    @ViewChild(MatExpansionPanel) matExpansionPanel: MatExpansionPanel;
}
