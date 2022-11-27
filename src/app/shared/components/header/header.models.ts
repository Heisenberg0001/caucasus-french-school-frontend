import {Language} from "@core/services";

export interface MenuItem {
  label: string;
  isOpen: boolean;
  children: { label: string; link: string }[];
}

export interface LanguageView extends Language {
  flagURL?: string;
}
