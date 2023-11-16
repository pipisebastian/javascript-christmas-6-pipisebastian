import { GIFT_DISCOUNT } from '../constants/discount';
import { priceFormatter } from '../formatters/priceFormatter'; 

export const INPUT_MESSAGE = Object.freeze({
  visitDate: '12월 중 식당 예상 방문 날짜는 언제인가요? (숫자만 입력해 주세요!)',
  order: '주문하실 메뉴를 메뉴와 개수를 알려 주세요. (e.g. 해산물파스타-2,레드와인-1,초코케이크-1)',
});

export const OUTPUT_MESSAGE = Object.freeze({
  preview: (date) => `12월 ${date}일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!`,
  menu: (menuName, menuCount) => `${menuName} ${menuCount}개`,
  gift: () => OUTPUT_MESSAGE.menu(GIFT_DISCOUNT.gift, GIFT_DISCOUNT.count),
  price: (price) => `${priceFormatter.format(price)}원`,
  discountPrice: (price) => `-${priceFormatter.format(price)}원`,
  nothing: '없음',
});

export const DISCOUNT_MESSAGE = Object.freeze({
  format: (discountTitle, price) => `${discountTitle}: ${OUTPUT_MESSAGE.discountPrice(price)}`,
  christmas: (price) => DISCOUNT_MESSAGE.format('크리스마스 디데이 할인', price),
  weekday: (price) => DISCOUNT_MESSAGE.format('평일 할인', price),
  weekend: (price) => DISCOUNT_MESSAGE.format('주말 할인', price),
  special: (price) => DISCOUNT_MESSAGE.format('특별 할인', price),
  gift: (price) => DISCOUNT_MESSAGE.format('증정 이벤트', price),
});

export const TITLE_MESSAGE = Object.freeze({
  order: '<주문 메뉴>',
  priceBeforeDiscount: '<할인 전 총주문 금액>',
  gift: '<증정 메뉴>',
  discount: '<혜택 내역>',
  totalDiscount: '<총혜택 금액>',
  priceAfterDiscount: '<할인 후 예상 결제 금액>',
  badge: '<12월 이벤트 배지>',
});
