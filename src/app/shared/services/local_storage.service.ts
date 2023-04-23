import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class LocalStorageService {
    constructor() {}

    set(key: string, data: any): void {
        try {
            localStorage.setItem(key, JSON.stringify(data));
        } catch (err) {
            console.error(
                'Не удалось сохранить данные в локальное хранилище',
                err
            );
        }
    }

    get(key: string): any {
        try {
            return JSON.parse(localStorage.getItem(key)!);
        } catch (err) {
            console.error(
                'Не удалось получить данные из локального хранилища',
                err
            );
            return null;
        }
    }
}
