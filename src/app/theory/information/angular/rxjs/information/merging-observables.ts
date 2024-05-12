import { IInfo } from '@types';

export const MERGING_OBSERVABLES: IInfo = {
    title: 'Объединение несколько потоков в 1 и получение общего результата',
    body: `<p>Для объединения потоков в RxJS есть специальный для этого операторы: <span>concat</span>,<span>merge</span>,<span>zip</span>,<span>combineLatest</span>,<span>forkJoin</span>. Какой из них применять, уже зависит от ожидаемого конечного результата.</p>
            
            <i class="subtitle" dialog-angular-change_detection-time_const>Оператор concat</i>`,
    selected: false,
    // disabled: true,
    lastUpdate: '05.05.2024',
};
