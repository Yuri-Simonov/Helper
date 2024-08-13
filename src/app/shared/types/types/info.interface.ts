export interface IInfo {
    id?: string;
    title?: string;
    body?: string;
    selected?: boolean;
    lastUpdate?: string;
    disabled?: boolean;
    footerLinks?: IFooterLinks[];
    chapter?: string;
    footerText?: [string, string]; // 1-ая строка - для ед.существа, 2-ая строка - для мн.числа
}

export interface IFooterLinks {
    title?: string;
    path?: string;
}
