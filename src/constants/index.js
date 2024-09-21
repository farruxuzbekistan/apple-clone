import {
  blackImg,
  blueImg,
  highlightFirstVideo,
  highlightFourthVideo,
  highlightSecondVideo,
  highlightThirdVideo,
  whiteImg,
  yellowImg,
} from "../utils";

export const navLists = [
  "Магазин",
  "Mac",
  "iPhone",
  "Поддержка",
  "Watch",
  "Support",
];

export const hightlightsSlides = [
  {
    id: 1,
    textLists: [
      "Представляем A17 Pro.",
      "Революционный чип.",
      "Невероятная производительность.",
    ],
    video: highlightFirstVideo,
    videoDuration: 4,
  },
  {
    id: 2,
    textLists: ["Титан.", "Такой прочный. Такой легкий. Такой Pro."],
    video: highlightSecondVideo,
    videoDuration: 5,
  },
  {
    id: 3,
    textLists: [
      "iPhone 15 Pro Max обладает",
      "самым длинным оптическим зумом",
      "за всю историю iPhone. Впечатляет.",
    ],
    video: highlightThirdVideo,
    videoDuration: 2,
  },
  {
    id: 4,
    textLists: ["Абсолютно новая кнопка Action.", "Что она сделает для вас?"],
    video: highlightFourthVideo,
    videoDuration: 3.63,
  },
];

export const models = [
  {
    id: 1,
    title: "iPhone 15 Pro в цвете Натуральный Титан",
    color: ["#8F8A81", "#ffe7b9", "#6f6c64"],
    img: yellowImg,
  },
  {
    id: 2,
    title: "iPhone 15 Pro в цвете Синий Титан",
    color: ["#53596E", "#6395ff", "#21242e"],
    img: blueImg,
  },
  {
    id: 3,
    title: "iPhone 15 Pro в цвете Белый Титан",
    color: ["#C9C8C2", "#ffffff", "#C9C8C2"],
    img: whiteImg,
  },
  {
    id: 4,
    title: "iPhone 15 Pro в цвете Черный Титан",
    color: ["#454749", "#3b3b3b", "#181819"],
    img: blackImg,
  },
];

export const sizes = [
  { label: '6.1"', value: "маленький" },
  { label: '6.7"', value: "большой" },
];

export const footerLinks = [
  "Политика конфиденциальности",
  "Условия использования",
  "Политика продаж",
  "Юридическая информация",
  "Карта сайта",
];
