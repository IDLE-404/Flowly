import { type ReactNode } from "react";
import { FcMindMap } from "react-icons/fc";
import { FcGenealogy } from "react-icons/fc";
import { FcAcceptDatabase } from "react-icons/fc";
export interface WellcomeCard {
  icon: ReactNode;
  title: string;
  text: string;
}

export const wellcomeCard: WellcomeCard[] = [
  {
    title: "Тщательный отбор",
    text: "Отобранные вручную курсы с лучших платформ",
    icon: <FcMindMap size={32} />,
  },
  {
    title: "Удобное сравнение",
    text: "Сравнивайте характеристики бок о бок",
    icon: <FcGenealogy size={32} />,
  },
  {
    title: "Сохранение избранных",
    text: "Добавляйте курсы в закладки на потом",
    icon: <FcAcceptDatabase size={32} />,
  },
];
