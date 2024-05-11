import { IInfo } from '@types';

export const TRACKING_CHANGES_IN_REACTIVE_FORMS: IInfo = {
    title: 'Отслеживание изменений в реактивных формах',
    body: `<p>
            Отслеживание изменений формы осуществляется через подписку на
            <code>valueChanges</code>. Функция обработчик принимает параметром
            значение формы.
        </p>
<pre><code class="language-typescript">this.someForm.valueChanges.subscribe((value) => {
  console.log(value)
})</code></pre>
        <p>Использовать valueChanges можно применительно к отдельному полю:</p>
<pre><code class="language-typescript">this.someForm.get('login').valueChanges.subscribe((value) => {
  console.log(value)
})</code></pre>
        <p>
            Если необходимо отследить изменение статуса формы, то нужно
            подписаться на <code>statusChanges</code>:
        </p>
<pre><code class="language-typescript">this.someForm.statusChanges.subscribe((status) => {
  console.log(status)
})</code></pre>
        <p>Аналогично и для конкретного поля формы:</p>
<pre><code class="language-typescript">this.someForm.get('login').statusChanges.subscribe((status) => {
  console.log(status)
})</code></pre>`,
    selected: false,
    lastUpdate: '09.02.2024',
};
