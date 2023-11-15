import { ORDER_MESSAGE } from '../messages/errorMessages';
import { MENU_TYPE } from '../constants/menu';
import { VALIDATION } from '../constants/event';
import CustomError from '../errors/CustomError';

export const validateDuplicateOrder = (name, order) => {
  const found = Array.from(order.keys()).find((menu) => menu.getName() === name);
  if (found) {
    throw new CustomError(ORDER_MESSAGE.duplicateMenu);
  }
  return true;
};

export const validateOnlyDrink = (order) => {
  if (Array.from(order.keys()).every((menu) => menu.getType() === MENU_TYPE.drink)) {
    throw new CustomError(ORDER_MESSAGE.onlyDrinkMenu);
  }
};

export const validateTotalMenuCount = (order) => {
  const totalCount = Array.from(order.values()).reduce((acc, cur) => acc + cur, 0);
  if (totalCount > VALIDATION.maxMenuCount) {
    throw new CustomError(ORDER_MESSAGE.maxOrderCount);
  }
};
