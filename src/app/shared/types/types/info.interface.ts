export interface IInfo {
    id?: string;
    title?: string;
    body?: string;
    selected?: boolean;
    lastUpdate?: string;
    disabled?: boolean;
    footerLinks?: IFooterLinks[];
    /**
     * Для подписей к ссылкам в футере спойлера.
     * 1-ая строка - для ед.существа, 2-ая строка - для мн.числа
     */
    footerText?: [string, string];
    chapter?: string; // Названия подразделов
    tasks?: ITasks[];
}

export interface IFooterLinks {
    title?: string;
    path?: string;
}

export interface ITasks {
    id?: string;
    title?: string;
    body?: string;
    selected?: boolean;
    disabled?: boolean;
}
