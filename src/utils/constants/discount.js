import { MENU, MENU_TYPE } from './menu';

export const CHRISTMAS_DISCOUNT = Object.freeze({
  startDate: 1,
  endDate: 25,
  defaultPrice: 1000,
  incrementPrice: 100,
});

export const WEEKDAY_DISCOUNT = Object.freeze({
  menuType: MENU_TYPE.dessert,
  price: 2023,
});

export const WEEKEND_DISCOUNT = Object.freeze({
  menuType: MENU_TYPE.main,
  price: 2023,
});

export const SPECIAL_DISCOUNT = Object.freeze({
  starDates: [3, 10, 17, 24, 25, 31],
  price: 1000,
});

export const GIFT_DISCOUNT = Object.freeze({
  triggerPrice: 120000,
  gift: '샴페인',
  price: MENU.drink.샴페인,
  count: 1,
});
