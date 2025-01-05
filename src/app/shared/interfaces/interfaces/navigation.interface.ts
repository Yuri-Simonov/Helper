export interface INavigation {
    id: string;
    path: string;
    name: string;
    links: INavigationLink[];
    sideLink?: boolean;
    targetBlank?: boolean;
    linkType?: LinkType;
    menuName?: string;
}

interface INavigationLink {
    path: string;
    name: string;
    disabled?: boolean;
    sideLink?: boolean;
    targetBlank?: boolean;
}

export const enum LinkType {
    DEFAULT = 'default',
    MENU = 'menu',
}
