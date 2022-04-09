export interface NewsInterface {
  id: number;
  header: string;
  content: string;
  date: number;
  isPublished: boolean;
}

const news: NewsInterface[] = [
  {
    id: 3322,
    header: "Лучшая новость",
    content: "Профиланс Групп запустилась!",
    date: 220022,
    isPublished: true,
  },
  {
    id: 9875,
    header: "Всё сдал",
    content: "Профиланс Групп запустила новый проект: !",
    date: 220022,
    isPublished: true,
  },
  {
    id: 6523,
    header: "Гульдог",
    content: "Профиланс Групп запустила новый проект: Гульдог!",
    date: 110120,
    isPublished: true,
  },
  {
    id: 5632,
    header: "Мурчалкин",
    content: "Профиланс Групп запустила новый проект: Мурчалкин!",
    date: 220022,
    isPublished: true,
  },
  {
    id: 4333,
    header: "Турбо-Ассистент",
    content: "Профиланс Групп запустила новый проект: Турбо-Ассистент!",
    date: 220022,
    isPublished: true,
  },
  {
    id: 8976,
    header: "Need for Skills",
    content: "Профиланс Групп запустила новый проект: Need for Skills!",
    date: 220022,
    isPublished: true,
  },
  {
    id: 8976,
    header: "НянЯрядом",
    content: "Профиланс Групп запустила новый проект: НянЯрядом!",
    date: 220022,
    isPublished: true,
  },
];

export default news;