import { IInfo } from 'src/app/shared/interfaces';

export const MERGING_OBSERVABLES: IInfo = {
    title: 'Объединение несколько потоков в 1 и получение общего результата',
    body: `<p>Для объединения потоков в RxJS есть специальный для этого операторы: <code class="dialog" dialog_id="concat">concat</code>, <code class="dialog" dialog_id="merge">merge</code>, <code class="dialog" dialog_id="zip">zip</code>, <code class="dialog" dialog_id="combineLatest">combineLatest</code> и <code class="dialog" dialog_id="forkJoin">forkJoin</code>. Какой из них применять, уже зависит от ожидаемого конечного результата.</p>`,
    selected: false,
    // disabled: true,
    lastUpdate: '05.05.2024',
};
