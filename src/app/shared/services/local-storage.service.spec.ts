import { ToastrService } from 'ngx-toastr';
import { LocalStorageService } from './local-storage.service';

describe('Сервис LocalStorageService', () => {
    let service!: LocalStorageService;
    let toastrMock!: jasmine.SpyObj<ToastrService>;

    beforeEach(() => {
        toastrMock = jasmine.createSpyObj('ToastrService', ['error']);
        service = new LocalStorageService(toastrMock);
        localStorage.clear();
    });

    it('должен сохранить данные в localStorage', () => {
        // 1) Вешаем шпиона ДО вызова метода
        const setSpy = spyOn(localStorage, 'setItem');
        // 2) Действие
        service.set('user', { name: 'Юрий' });
        // 3) Проверка, что setItem вызвался с правильными аргументами
        expect(setSpy).toHaveBeenCalledOnceWith('user', JSON.stringify({ name: 'Юрий' }));
    });

    it('должен взять данные из localStorage', () => {
        service.set('user', { name: 'Юрий' });
        const stored = service.get('user');

        expect(stored).toEqual({ name: 'Юрий' });
        expect(toastrMock.error).not.toHaveBeenCalled(); // тост не показывался
    });

    it('должен вернуть null, если запрашиваемых данных нет в localStorage', () => {
        const stored = service.get('age');

        expect(stored).toBeNull();
    });

    it('должен вернуть null, если JSON.parse упал', () => {
        spyOn(localStorage, 'getItem').and.returnValue('{"broken": true'); // невалидный JSON

        const result = service.get('settings');

        expect(toastrMock.error).toHaveBeenCalled(); // тост показали
        expect(result).toBeNull(); // метод вернул null
    });

    it('должен показать тост, если не удалось записать данные в localStorage', () => {
        spyOn(localStorage, 'setItem').and.throwError('Ошибка localStorage');
        service.set('user', null);

        expect(toastrMock.error).toHaveBeenCalled(); // тост показали
    });
});
