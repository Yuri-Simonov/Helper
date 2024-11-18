import { IInfo } from 'src/app/shared/interfaces';

export const WHEN_USE_PIPE: IInfo = {
    title: 'Тип данных, у которого можно вызвать метод <span class="variable">pipe</span>',
    body: `<p>
            <span class="attention">Метод </span> <code>pipe</code>
            <span class="attention">
                применяется к данным, имеющих тип данных
            </span>
            <code>Observable</code>
            <span class="attention"> или его разновидности</span> (например,
            <code>Subject</code>).
        </p>
        <p>
            Причем внутри себя метод <code>pipe</code> принимает только те
            операторы, которые принимают <code>Observable</code> и возвращают
            <code>Observable</code>.
        </p>`,
    selected: false,
    lastUpdate: '09.02.2024',
};
