import { EVENT, VALIDATION } from '../constants/event';

const visitDate = (detail) => `유효하지 않은 날짜입니다. 다시 입력해 주세요. ${detail}`;
const order = (detail) => `유효하지 않은 주문입니다. 다시 입력해 주세요. ${detail}`;

export const VISIT_DATE_MESSAGE = Object.freeze({
  invalidNumber: visitDate('날짜는 숫자여야 합니다.'),
  invalidRange: visitDate(`12월 ${EVENT.startDate}일부터 ${EVENT.endDate}일까지만 입력 가능합니다.`),
});

export const ORDER_MESSAGE = Object.freeze({
  duplicateMenu: order('주문에 중복된 메뉴가 존재합니다.'),
  onlyDrinkMenu: order(`주문은 음료만 주문할 수 없습니다.`),
  maxOrderCount: order(`메뉴는 총 ${VALIDATION.maxMenuCount}개 이하로 주문해야 합니다.`),
});

export const MENU_MESSAGE = Object.freeze({
  isNotExistMenu: order('존재하지 않는 메뉴입니다.'),
});

export const MENU_COUNT_MESSAGE = Object.freeze({
  invalidNumber: order('메뉴 개수는 숫자여야 합니다.'),
  minMenuCount: order(`메뉴는 ${VALIDATION.minMenuCount}개 이상으로 주문해야 합니다.`),
});
