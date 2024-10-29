import { Component } from '@angular/core';
import { MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { ToastrService } from 'ngx-toastr';

const materialModules = [MatDialogActions, MatDialogContent, MatButtonModule, MatDialogTitle, MatDialogClose];

@Component({
    selector: 'app-dialog-support',
    standalone: true,
    imports: [materialModules],
    templateUrl: './dialog-support.component.html',
    styleUrl: './dialog-support.component.scss',
})
export class DialogSupportComponent {
    constructor(private toastrService: ToastrService) {}

    copyCardNumber(text: string) {
        navigator.clipboard.writeText(text);
        this.toastrService.success('', 'Номер скопирован!', {
            progressBar: true,
            progressAnimation: 'increasing',
            positionClass: 'toast-bottom-right',
            closeButton: true,
        });
    }
}
