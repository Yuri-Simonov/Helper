import { IInfo } from 'src/app/shared/interfaces';

export const INTERCEPTORS: IInfo = {
    title: 'Интерцепторы',
    body: `<p>
                Интерцепторы, если переводить дословно, это "перехватчики". Они
                <span class="attention">позволяют перехватывать и изменять HTTP-запросы</span>, уходящие с клиента на
                сервер, а также ответы, которые сервер возвращает на клиент. Это позволяет добавить дополнительную
                логику, например, обработку ошибок, добавление токенов авторизации, логирование запросов и т.д.
            </p>
            <p>Или если говорить простыми словами, интерцепторы действуют как посредники между клиентом и сервером.</p>
            <p>Самый простой интерцептор выглядит следующим образом:</p>
            <pre><code class="language-typescript">export const exampleInterceptor: HttpInterceptorFn = (req, next) => {
    return next(req);
};</code></pre>
            <p>Это обычная стрелочная функция, принимающая два параметра:</p>
            <ul>
                <li><code>req</code> - содержит объект с информацией запроса, который отправляется на сервер;</li>
                <li>
                    <code>next</code> - обработчик запроса, который передает запрос следующему интерцептору. Если
                    текущий интерцептор является последним или вообще единственным, то запрос отправляется на сервер.
                </li>
            </ul>
            <i class="subtitle">Подключение интерцептора</i>
            <p>
                Настройка всех интерцепторов происходит в конфиге корня приложения. За это отвечает файл
                <code>app.config.ts</code>:
            </p>
            <pre><code class="language-typescript">export const appConfig: ApplicationConfig = {
    providers: [
        provideHttpClient(
            withInterceptors([exampleInterceptor])
        ),
    ],
};</code></pre>
            <p>
                Интерцепторам необходим модуль <code>HttpClient</code>, позволяющий работать с HTTP-запросами. В конфиге
                он подключается как функция <code>provideHttpClient</code>. Внутри ее круглых скобок в качестве
                аргумента можно указать функцию <code>withInterceptors</code>, которая позволяет добавлять в конфиг
                интерцепторы. И внутрь данной функции передается массив с необходимыми интерцепторами. В нашем случае
                это <code>exampleInterceptor</code>.
            </p>
            <p>
                Тут также стоит учесть, что
                <span class="attention">порядок интерцепторов в данном массиве имеет значение</span>. Сначала запрос
                пройдет через первый элемент данного массива, затем через второй и т.д. Т.е.
                <span class="attention">интерцепторы работают по цепочке</span>.
            </p>
            <p>Допустим у нас имеется 3 интерцептора:</p>
            <pre><code class="language-typescript">export const appConfig: ApplicationConfig = {
    providers: [
        provideHttpClient(
            withInterceptors([firstInterceptor, secondInterceptor, thirdInterceptor])
        ),
    ],
};</code></pre>
            <p>Тогда при запросе на сервер цепочка интерцепторов будет следующая:</p>
            <pre><code class="language-typescript">firstInterceptor --> secondInterceptor --> thirdInterceptor</code></pre>
            <p>При ответе сервера будет последовательность в обратном порядке:</p>
            <pre><code class="language-typescript">thirdInterceptor --> secondInterceptor --> firstInterceptor</code></pre>
            <p>
                <span class="attention"
                    >Чтобы увидеть работу подключенных интерцепторов, необходимо сделать запрос на сервер</span
                >.
            </p>
            <i class="subtitle">Изменение запроса</i>
            <p>
                Для изменения запроса используется метод <code>clone</code>, который есть у первого параметра функции
                интерцептора. Он создаст новую копию запроса с переданными в него изменениями.
            </p>
            <pre><code class="language-typescript">export const exampleInterceptor: HttpInterceptorFn = (req, next) => {
    req = req.clone();

    return next(req);
};</code></pre>
            <p>
                Если попытаться изменить запрос напрямую без <code>clone</code>, возникнет ошибка, т.к. объект запроса,
                содержащийся в параметре <code>req</code>, является иммутабельным (неизменяемым).
            </p>
            <p>
                Допустим мы хотим добавить в запрос токен авторизации. Для этого внутри функции
                <code>clone</code> указывается объект и в нем необходимо задать поле <code>setHeaders</code>. И внутри
                него создать заголовок <code>Authorization</code>. Значение этого заголовка условное для примера:
            </p>
            <pre><code class="language-typescript">export const exampleInterceptor: HttpInterceptorFn = (req, next) => {
    req = req.clone({
        setHeaders: {
            Authorization: 'Bearer some-token',
        },
    });

    return next(req);
};</code></pre>
            <i class="subtitle">Перехват ответа сервера</i>
            <p>Теперь давайте посмотрим как перехватывать ответы с сервера, прежде чем они попадут на клиент.</p>
            <p>
                Метод <code>next</code> возвращает <code>observable</code>. Т.е.,
                <span class="attention">
                    когда отправляется запрос на сервер, создается поток, в который и попадет ответ с сервера </span
                >. Только в данном случае на поток не нужно подписываться для получения информации из него, т.к. это
                происходит под капотом. Но нам никто не запрещает получить информацию с помощью метода
                <code>pipe</code>:
            </p>
            <pre><code class="language-typescript">export const exampleInterceptor: HttpInterceptorFn = (req, next) => {
    return next(req).pipe(tap(() => console.log('response', req)));
};</code></pre>`,
    selected: false,
    lastUpdate: '23.01.2025',
    footerLinks: [
        {
            path: 'https://youtu.be/0fft0ak2l-s',
        },
    ],
};
