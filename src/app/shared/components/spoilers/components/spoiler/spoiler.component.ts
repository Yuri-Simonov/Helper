import { NgClass } from '@angular/common';
import { Component, HostListener, Input, ViewChild } from '@angular/core';
import { MatAccordion, MatExpansionModule } from '@angular/material/expansion';
import { FooterLinksComponent } from '../footer-links/footer-links.component';
import { IInfo } from '../../../../types';
import { MatDialog } from '@angular/material/dialog';
import { DialogSpoilerComponent } from '../../../dialogs/dialog-spoiler/dialog-spoiler.component';
import { HighlightJsDirective } from 'ngx-highlight-js';
import { PipeSanitizer } from '../../../../pipes/pipe-sanitizer.pipe';

const materialModules = [MatExpansionModule];

@Component({
    selector: 'app-spoiler',
    standalone: true,
    imports: [materialModules, NgClass, HighlightJsDirective, FooterLinksComponent, PipeSanitizer],
    templateUrl: './spoiler.component.html',
    styleUrl: './spoiler.component.scss',
})
export class SpoilerComponent {
    @Input('info') infoProps: IInfo;

    firstMatAccordionOpening: boolean = true;

    @ViewChild(MatAccordion) accordion: MatAccordion;

    @HostListener('click', ['$event.target.attributes']) handleClick(attributes: NamedNodeMap) {
        const dialogId = attributes.getNamedItem('dialog_id')?.value;

        if (dialogId) {
            this.openDialog(dialogId);
        }
    }

    @HostListener('document:keyup.escape') handleKeyUpEscape() {
        this.accordion.closeAll();
    }

    constructor(private dialog: MatDialog) {}

    async openDialog(id: string) {
        /**
         * костыльное решение после перехода с вебпака на Vite (переход на 18-ую версию Angular),
         * т.к. Vite не поддерживает динамические импорты (июнь, 2024)
         */
        const rxjsOperatorsInfo = (await import('../../../../../theory/information/angular/rxjs-operators/index'))
            .rxjsOperatorsInfo;

        rxjsOperatorsInfo.forEach((item) => {
            if (item?.id === id) {
                this.dialog.open(DialogSpoilerComponent, { data: item });
            }
        });
    }
}
