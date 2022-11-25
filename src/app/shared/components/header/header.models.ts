export interface MenuItem {
  label: string;
  isOpen: boolean;
  children: { label: string; link: string }[];
}

export interface Language {
  label: string;
  flagURL: string;
  altText: string;
}
