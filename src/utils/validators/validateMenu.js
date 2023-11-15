import { MENU_MESSAGE, MENU_COUNT_MESSAGE } from '../messages/errorMessages';
import { MENU } from '../constants/menu';
import { VALIDATION } from '../constants/event';
import CustomError from '../errors/CustomError';

export const validateMenuName = (name) => {
  validateExist(name);
};

export const validateMenuCount = (menuCount) => {
  validateType(menuCount);
  validateRange(menuCount);
};

const validateExist = (name) => {
  for (const menuItems of Object.values(MENU)) {
    if (menuItems.hasOwnProperty(name)) {
      return;
    }
  }
  throw new CustomError(MENU_MESSAGE.isNotExistMenu);
};

const validateType = (menuCount) => {
  if (typeof menuCount !== 'number' || Number.isNaN(menuCount)) {
    throw new CustomError(MENU_COUNT_MESSAGE.invalidNumber);
  }
};

const validateRange = (menuCount) => {
  if (menuCount < VALIDATION.minMenuCount) {
    throw new CustomError(MENU_COUNT_MESSAGE.minMenuCount);
  }
};
