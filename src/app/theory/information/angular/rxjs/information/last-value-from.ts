import { IInfo } from 'src/app/shared/interfaces';

export const LAST_VALUE_FROM: IInfo = {
    title: '<span class="variable">lastValueFrom</span>',
    body: `<p>
                <span class="attention"
                    >Функция <code>lastValueFrom</code> позволяет получить последнее значение из
                    <code>Observable</code> перед его завершением в виде</span
                >
                <code>Promise</code>.
            </p>
            <p>Фактически это мост между <code>Observable</code> и <code>Promise</code>.</p>
            <p>Данная функция возвращает <code>Promise</code>, который:</p>
            <ul>
                <li>ждёт, пока <code>Observable</code> завершится (<code>complete</code>);</li>
                <li>запоминает последнее значение, попадающее в поток;</li>
                <li>резолвится последним значением;</li>
                <li>реджектится при ошибке;</li>
                <li>реджектится, если поток завершился без значений.</li>
            </ul>
            <p>Пример:</p>
            <pre><code class="language-javascript">async function run() {
	const source$ = of(10, 20, 30);

	const result = await lastValueFrom(source$);
	console.log(result); // 30
}

run();</code></pre>
            <p>
                Для случаев, когда поток завершился без значений, можно задать значение по умолчанию, чтобы
                <code>Promise</code> зарезолвился в него, а не сделал реджект:
            </p>
            <pre><code class="language-javascript">lastValueFrom(source$, { defaultValue: null });</code></pre>
            <p>
                Т.к. <code>lastValueFrom</code> ждет завершение потока, то использовать вместе с ним никогда не
                заверщающиеся потоки будет неправильно:
            </p>
            <pre><code class="language-typescript">await lastValueFrom(interval(1000)); // зависнет навсегда</code></pre>`,
    selected: false,
    lastUpdate: '01.02.2026',
};
