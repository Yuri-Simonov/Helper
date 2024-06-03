import { Component } from '@angular/core';
import { MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

const materialModules = [MatDialogActions, MatDialogContent, MatButtonModule, MatDialogTitle, MatDialogClose];

@Component({
    selector: 'app-dialog-support',
    standalone: true,
    imports: [materialModules],
    templateUrl: './dialog-support.component.html',
    styleUrl: './dialog-support.component.scss',
})
export class DialogSupportComponent {
    copyCardNumber(text: string) {
        navigator.clipboard.writeText(text);
    }
}
