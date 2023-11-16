const eppetizer = Object.freeze({
  양송이수프: 6000,
  타파스: 5500,
  시저샐러드: 5000,
});

const main = Object.freeze({
  티본스테이크: 55000,
  바비큐립: 54000,
  해산물파스타: 35000,
  크리스마스파스타: 25000,
});

const dessert = Object.freeze({
  초코케이크: 15000,
  아이스크림: 5000,
});

const drink = Object.freeze({
  제로콜라: 3000,
  레드와인: 60000,
  샴페인: 25000,
});

export const MENU_TYPE = Object.freeze({
  eppetizer: 'eppetizer',
  main: 'main',
  dessert: 'dessert',
  drink: 'drink',
});

export const MENU = Object.freeze({
  [MENU_TYPE.eppetizer]: eppetizer,
  [MENU_TYPE.main]: main,
  [MENU_TYPE.dessert]: dessert,
  [MENU_TYPE.drink]: drink,
});
