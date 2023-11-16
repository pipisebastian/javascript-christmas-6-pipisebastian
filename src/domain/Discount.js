import {
  CHRISTMAS_DISCOUNT,
  WEEKDAY_DISCOUNT,
  WEEKEND_DISCOUNT,
  SPECIAL_DISCOUNT,
  GIFT_DISCOUNT,
} from '../utils/constants/discount';

class Discount {
  static getChristmasDiscount(visitDate) {
    if (visitDate.isChristmasDay()) {
      const date = visitDate.getVisitDate();
      const incrementPrice = (date - CHRISTMAS_DISCOUNT.startDate) * CHRISTMAS_DISCOUNT.incrementPrice;

      return CHRISTMAS_DISCOUNT.defaultPrice + incrementPrice;
    }
    return 0;
  }

  static getWeekdayDiscount(visitDate, count) {
    if (visitDate.isWeekday()) {
      return WEEKDAY_DISCOUNT.price * count;
    }
    return 0;
  }

  static getWeekendDiscount(visitDate, count) {
    if (visitDate.isWeekend()) {
      return WEEKEND_DISCOUNT.price * count;
    }
    return 0;
  }

  static getSpecialDiscount(visitDate) {
    if (visitDate.isSpecialDay()) {
      return SPECIAL_DISCOUNT.price;
    }
    return 0;
  }

  static getGiftDiscount(totalPrice) {
    if (totalPrice >= GIFT_DISCOUNT.triggerPrice) {
      return GIFT_DISCOUNT.price * GIFT_DISCOUNT.count;
    }
    return 0;
  }
}

export default Discount;
