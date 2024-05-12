import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import {
    MAT_DIALOG_DATA,
    MatDialogActions,
    MatDialogClose,
    MatDialogContent,
    MatDialogTitle,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { IInfo } from '../../types';
import { HighlightJsDirective } from 'ngx-highlight-js';

const materialModules = [MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle, MatButtonModule];

@Component({
    selector: 'app-dialog',
    standalone: true,
    imports: [materialModules, HighlightJsDirective],
    templateUrl: './dialog.component.html',
    styleUrl: './dialog.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogComponent {
    constructor(@Inject(MAT_DIALOG_DATA) public data: IInfo) {
        // console.log('data', window.navigator.userAgent);
        // сделать на мобилке модалку во всю ширину экрана
    }
}
