import { Injectable } from '@angular/core';

import { LocalStorageService } from './local-storage.service';

import { getUpdatesIds } from '../data/updates';

const UPDATES = 'updates';

@Injectable({
    providedIn: 'root',
})
export class UpdatesService {
    private _hasUnreadNotifications: boolean = false;

    constructor(private localStorageService: LocalStorageService) {}

    /**
     * Проверка того, что все id обновлений из localStorage есть в массиве updatesId.
     * @param localStorageUpdatesIds - текущий массив id обновлений, который были просмотрены пользователем и сохранены в localStorage
     * @param updatesIds - массив id имеющихся обновлений
     * @returns если все id обновлений из localStorage есть в updatesId, то возвращает true, иначе false
     */
    private checkLocalStorageUpdatesIds = (localStorageUpdatesIds: number[], updatesIds: number[]) =>
        updatesIds.every((updatesId) => localStorageUpdatesIds.includes(updatesId));

    getHasUnreadNotifications(): boolean {
        return this._hasUnreadNotifications;
    }

    /**
     * Проверка наличия новых обновлений
     * @returns true если есть новые обновления, иначе false
     */
    checkActiveNotifications(): boolean {
        const updatesIds = getUpdatesIds();
        const localStorageUpdatesIds = this.localStorageService.get(UPDATES);

        if (
            !this.localStorageService.get(UPDATES) ||
            !this.checkLocalStorageUpdatesIds(localStorageUpdatesIds, updatesIds)
        ) {
            this._hasUnreadNotifications = true;
        }

        return this._hasUnreadNotifications;
    }

    /**
     * Отметить обновления как просмотренное
     */
    markAsRead(): void {
        this._hasUnreadNotifications = false;
        this.localStorageService.set(UPDATES, getUpdatesIds());
    }
}
