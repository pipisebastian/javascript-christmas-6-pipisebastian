import { VISIT_DATE_MESSAGE } from '../messages/errorMessages';
import { EVENT } from '../constants/event';
import CustomError from '../errors/CustomError';

export const validateVisitDate = (visitDate) => {
  validateType(visitDate);
  validateRange(visitDate);
};

const validateType = (visitDate) => {
  if (typeof visitDate !== 'number' || Number.isNaN(visitDate)) {
    throw new CustomError(VISIT_DATE_MESSAGE.invalidNumber);
  }
};

const validateRange = (visitDate) => {
  if (visitDate < EVENT.startDate || visitDate > EVENT.endDate) {
    throw new CustomError(VISIT_DATE_MESSAGE.invalidRange);
  }
};
