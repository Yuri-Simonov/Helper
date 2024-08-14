export interface INavigation {
    id: string;
    path: string;
    name: string;
    links: INavigationLink[];
    sideLink?: boolean;
    targetBlank?: boolean;
}

interface INavigationLink {
    path: string;
    name: string;
    disabled?: boolean;
    sideLink?: boolean;
    targetBlank?: boolean;
}
