export interface IInfo {
    title?: string;
    body?: string;
    selected?: boolean;
    lastUpdate?: string;
    disabled?: boolean;
    footerLinks?: IFooterLinks[];
    chapter?: string;
    footerText?: [string, string]; // 1-ая строка - для ед.существа, 2-ая строка - для мн.числа
}

interface IFooterLinks {
    title?: string;
    path?: string;
}
