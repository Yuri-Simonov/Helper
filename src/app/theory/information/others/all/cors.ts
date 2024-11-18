import { IInfo } from 'src/app/shared/interfaces';

export const CORS: IInfo = {
    title: '<span class="variable">CORS</span>',
    body: `<p>
                <code>CORS</code> (Cross-Origin Resource Sharing) — это
                <span class="attention"
                    >механизм, который позволяет веб-сайтам ограничивать доступ к своим ресурсам из других доменов</span
                >.
            </p>
            <p>
                По умолчанию браузеры блокируют запросы с одного домена на другой, если запросы не удовлетворяют
                условиям безопасности. <code>CORS</code> позволяет обходить эти ограничения, предоставляя определенным
                доменам разрешение на доступ к ресурсам сервера.
            </p>
            <p>Основные моменты, которые желательно знать фронтенд-разработчику о <code>CORS</code>:</p>
            <i class="subtitle">Что такое "Origin"</i>
            <ul>
                <li>
                    <code>Origin</code> (источник) — это <span class="attention">комбинация протокола</span> (например,
                    <code>http</code>), <span class="attention">домена</span> (например, <code>example.com</code>)
                    <span class="attention">и порта</span> (например, <code>:80</code> для HTTP). Если хотя бы одна из
                    этих частей отличается, запрос считается "междоменным" (cross-origin);
                </li>
            </ul>
            <i class="subtitle">Типы запросов</i>
            <ul>
                <li>
                    <code>Simple Requests</code> (Простые запросы): Это <code>GET</code>, <code>POST</code>, или
                    <code>HEAD</code> запросы с некоторыми ограничениями на заголовки (например,
                    <code>Content-Type</code> должен быть <code>text/plain</code>, <code>multipart/form-data</code> или
                    <code>application/x-www-form-urlencoded</code>). Эти запросы обрабатываются без предварительных
                    проверок;
                </li>
                <li>
                    <code>Preflight Requests</code> (Предварительные запросы): Для более сложных запросов (например,
                    запросы с методами <code>PUT</code>, <code>DELETE</code>, или с нестандартными заголовками) браузер
                    сначала отправляет <code>OPTIONS</code>-запрос на сервер, чтобы проверить, разрешает ли сервер такой
                    запрос. Только после положительного ответа серверу отправляется основной запрос.
                </li>
            </ul>
            <i class="subtitle">Заголовки CORS</i>
            <ul>
                <li>
                    <code>Access-Control-Allow-Origin</code>: Определяет, какие домены могут получать доступ к ресурсам.
                    Например, "<code>Access-Control-Allow-Origin</code>: <code>*</code>" разрешает доступ всем доменам
                    (что не всегда безопасно);
                </li>
                <li>
                    <code>Access-Control-Allow-Methods</code>: Указывает, какие HTTP-методы разрешены (например,
                    <code>GET</code>, <code>POST</code>, <code>PUT</code>, <code>DELETE</code>);
                </li>
                <li>
                    <code>Access-Control-Allow-Headers</code>: Указывает, какие заголовки могут быть использованы при
                    отправке запроса;
                </li>
                <li>
                    <code>Access-Control-Allow-Credentials</code>: Разрешает передачу кукисов и авторизационных данных в
                    междоменных запросах.
                </li>
            </ul>
            <i class="subtitle">Проблемы с CORS</i>
            <ul>
                <li>
                    Если сервер неправильно настроен, браузер может блокировать запросы с фронтенда, что приводит к
                    ошибкам вроде "<i>Access to fetch at '...' from origin '...' has been blocked by CORS policy</i>".
                </li>
                <li>
                    Часто фронтенд-разработчики сталкиваются с <code>CORS</code>-проблемами на этапе разработки,
                    особенно при взаимодействии с внешними API или во время локальной разработки, когда сервер и клиент
                    работают на разных портах.
                </li>
            </ul>
            <i class="subtitle">Решение CORS-проблем</i>
            <ul>
                <li>
                    <span class="attention">Настройка сервера</span>: Самый надежный способ решения проблем — настроить
                    сервер так, чтобы он правильно обрабатывал <code>CORS</code>-запросы.
                </li>
                <li>
                    <span class="attention">Проксирование запросов</span>: Можно настроить прокси-сервер или
                    использовать прокси в среде разработки (например, <code>http-proxy-middleware</code> в Node.js),
                    чтобы обходить <code>CORS</code>-ограничения.
                </li>
                <li>
                    <span class="attention">JSONP</span>: Устаревший подход для обхода <code>CORS</code>, который
                    использовался до введения <code>CORS</code>, но его лучше избегать, так как он имеет проблемы с
                    безопасностью.
                </li>
            </ul>
            <p>Пример настройки <code>CORS</code> на сервере (Node.js с Express):</p>
            <pre><code class="language-javascript">const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors({
	origin: 'https://example.com', // Разрешаем доступ только с https://example.com
	methods: ['GET', 'POST'], // Разрешаем только GET и POST запросы
	credentials: true // Разрешаем передачу кукисов
}));

app.get('/data', (req, res) => {
  	res.json({ message: 'This is CORS-enabled for https://example.com only!' });
});

app.listen(3000, () => {
  	console.log('CORS-enabled web server listening on port 3000');
});
</code></pre>
            <p>
                Для фронтенд-разработчика важно понимать, как работает <code>CORS</code>, чтобы эффективно
                взаимодействовать с API и не сталкиваться с проблемами междоменного доступа. Основное внимание стоит
                уделять настройке сервера и правильному использованию заголовков, чтобы обеспечить безопасный и
                корректный обмен данными.
            </p>`,
    selected: false,
    lastUpdate: '14.08.2023',
};
