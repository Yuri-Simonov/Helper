import { NgClass } from '@angular/common';
import { Component, HostListener, Input, ViewChild } from '@angular/core';
import { MatExpansionModule, MatExpansionPanel } from '@angular/material/expansion';
import { MatDialog } from '@angular/material/dialog';
import { HighlightJsDirective } from 'ngx-highlight-js';

import { IInfo } from '../../../../interfaces';

import { PipeSanitizer } from '../../../../pipes/pipe-sanitizer.pipe';

import { CloseSpoilersDirective } from '../../directives/close-spoilers.directive';

import { FooterLinksComponent } from '../footer-links/footer-links.component';
import { DialogSpoilerComponent } from '../../../dialogs/dialog-spoiler/dialog-spoiler.component';
import { TasksComponent } from '../tasks/tasks.component';

const materialModules = [MatExpansionModule];

@Component({
    selector: 'app-spoiler',
    imports: [
        materialModules,
        NgClass,
        HighlightJsDirective,
        FooterLinksComponent,
        TasksComponent,
        PipeSanitizer,
        CloseSpoilersDirective,
    ],
    templateUrl: './spoiler.component.html',
    styleUrl: './spoiler.component.scss',
})
export class SpoilerComponent {
    @Input('info') infoProps: IInfo;

    firstMatAccordionOpening: boolean = true;

    @ViewChild(MatExpansionPanel) matExpansionPanel: MatExpansionPanel;

    @HostListener('click', ['$event.target.attributes']) handleClick(attributes: NamedNodeMap) {
        const dialogId = attributes.getNamedItem('dialog_id')?.value;

        if (dialogId) {
            this.openDialog(dialogId);
        }
    }

    constructor(private dialog: MatDialog) {}

    async openDialog(id: string) {
        /**
         * костыльное решение после перехода с вебпака на Vite (переход на 18-ую версию Angular),
         * т.к. Vite не поддерживает динамические импорты (июнь, 2024)
         */
        const rxjsOperatorsInfo = (await import('../../../../../theory/information/angular/rxjs-operators/index'))
            .rxjsOperatorsInfo;
        const decoratorsInfo = (await import('../../../../../theory/information/angular/decorators/index'))
            .decoratorsInfo;
        const servicesInfo = (await import('../../../../../theory/information/angular/services/index')).servicesInfo;
        const changeDetectionInfo = (await import('../../../../../theory/information/angular/change-detection/index'))
            .changeDetectionInfo;

        const importedInfo = [...rxjsOperatorsInfo, ...decoratorsInfo, ...servicesInfo, ...changeDetectionInfo];

        importedInfo.forEach((item) => {
            if (item?.id === id) {
                this.dialog.open(DialogSpoilerComponent, { data: item });
            }
        });
    }
}
