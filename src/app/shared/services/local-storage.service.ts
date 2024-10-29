import { ToastrService } from 'ngx-toastr';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class LocalStorageService {
    constructor(private toastrService: ToastrService) {}
    /**
     * Взятие значения из локального хранилища
     * @param key - ключ, по которому будут браться данные из локального хранилища - string
     */
    get(key: string): any {
        try {
            return JSON.parse(localStorage.getItem(key)!);
        } catch (err) {
            this.toastrService.error('', 'Не удалось получить данные из локального хранилища', {
                progressBar: true,
                progressAnimation: 'increasing',
                positionClass: 'toast-bottom-right',
                closeButton: true,
            });
            return null;
        }
    }

    /**
     * Установление значения в локальное хранилища
     * @param key - ключ, по которому будут сохранены данные в локальном хранилище - string
     * @param data - данные по указанному ключу - any
     */
    set(key: string, data: any): void {
        try {
            localStorage.setItem(key, JSON.stringify(data));
        } catch (err) {
            this.toastrService.error('', 'Не удалось сохранить данные в локальное хранилище', {
                progressBar: true,
                progressAnimation: 'increasing',
                positionClass: 'toast-bottom-right',
                closeButton: true,
            });
        }
    }
}
