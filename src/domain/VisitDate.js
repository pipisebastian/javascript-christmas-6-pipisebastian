import { CHRISTMAS_DISCOUNT, SPECIAL_DISCOUNT } from '../utils/constants/discount';
import { EVENT } from '../utils/constants/event';
import { validateVisitDate } from '../utils/validators/validateVisitDate';

class VisitDate {
  #visitDate;

  constructor(dateInput) {
    const visitDate = Number(dateInput);
    validateVisitDate(visitDate);
    this.#visitDate = visitDate;
  }

  getVisitDate() {
    return this.#visitDate;
  }

  isWeekend() {
    const localDate = new Date(EVENT.year, 11, this.#visitDate);
    return localDate.getDay() === 5 || localDate.getDay() === 6;
  }

  isWeekday() {
    return !this.isWeekend();
  }

  isSpecialDay() {
    return SPECIAL_DISCOUNT.starDates.includes(this.#visitDate);
  }

  isChristmasDay() {
    return this.#visitDate >= CHRISTMAS_DISCOUNT.startDate && this.#visitDate <= CHRISTMAS_DISCOUNT.endDate;
  }
}

export default VisitDate;
