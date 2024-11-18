import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import {
    MAT_DIALOG_DATA,
    MatDialogActions,
    MatDialogClose,
    MatDialogContent,
    MatDialogTitle,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { IInfo } from '../../../interfaces';
import { HighlightJsDirective } from 'ngx-highlight-js';

const materialModules = [MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle, MatButtonModule];

@Component({
    selector: 'app-dialog-spoiler',
    standalone: true,
    imports: [materialModules, HighlightJsDirective],
    templateUrl: './dialog-spoiler.component.html',
    styleUrl: './dialog-spoiler.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogSpoilerComponent {
    constructor(@Inject(MAT_DIALOG_DATA) public data: IInfo) {}
}
