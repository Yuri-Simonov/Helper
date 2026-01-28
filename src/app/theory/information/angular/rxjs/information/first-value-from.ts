import { IInfo } from 'src/app/shared/interfaces';

export const FIRST_VALUE_FROM: IInfo = {
    title: '<span class="variable">firstValueFrom</span>',
    body: `<p>
                <span class="attention"
                    >Функция <code>firstValueFrom</code> позволяет получить первое значение из <code>Observable</code> в
                    виде</span
                >
                <code>Promise</code>.
            </p>
            <p>Фактически это мост между <code>Observable</code> и <code>Promise</code>.</p>
            <p>Данная функция возвращает <code>Promise</code>, который:</p>
            <ul>
                <li>резолвится первым значением из <code>Observable</code>;</li>
                <li>автоматически отписывается;</li>
                <li>реджектится при ошибке;</li>
                <li>реджектится, если поток завершился без значений.</li>
            </ul>
            <p>Пример:</p>
            <pre><code class="language-javascript">async function load() {
	const result = await firstValueFrom(source$);
	console.log(result);
}</code></pre>
            <p>
                Для случаев, когда поток завершился без значений, можно задать значение по умолчанию, чтобы
                <code>Promise</code> зарезолвился в него, а не сделал реджект:
            </p>
            <pre><code class="language-javascript">firstValueFrom(source$, { defaultValue: null });</code></pre>`,
    selected: false,
    lastUpdate: '28.01.2026',
};
