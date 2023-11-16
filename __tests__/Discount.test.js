import Discount from '../src/domain/Discount';
import VisitDate from '../src/domain/VisitDate';
import {
  CHRISTMAS_DISCOUNT,
  WEEKDAY_DISCOUNT,
  WEEKEND_DISCOUNT,
  GIFT_DISCOUNT,
  SPECIAL_DISCOUNT,
} from '../src/utils/constants/discount';

describe('Discount 클래스 테스트', () => {
  const weekend = 2;
  const weekday = 3;
  const christmasDay = 25;
  const nonChristmasDay = 26;
  const specialDay = 3;
  const nonSpecialDay = 4;

  describe('크리스마스 디데이 할인', () => {
    test('이벤트 시작일로부터 할인 금액이 증가하여 적용된다.', () => {
      const visitDate = new VisitDate(christmasDay);
      const discount = Discount.getChristmasDiscount(visitDate);
      expect(discount).toBe(
        CHRISTMAS_DISCOUNT.defaultPrice +
          (christmasDay - CHRISTMAS_DISCOUNT.startDate) * CHRISTMAS_DISCOUNT.incrementPrice,
      );
    });

    test('크리스마스 이벤트가 아닌 날에는 할인이 적용되지 않는다.', () => {
      const visitDate = new VisitDate(nonChristmasDay);
      const discount = Discount.getChristmasDiscount(visitDate);
      expect(discount).toBe(0);
    });
  });

  describe('평일 할인', () => {
    test('평일에 해당하는 메뉴의 개수에 따라 할인이 적용된다.', () => {
      const visitDate = new VisitDate(weekday);
      const count = 3;
      const discount = Discount.getWeekdayDiscount(visitDate, count);
      expect(discount).toBe(WEEKDAY_DISCOUNT.price * count);
    });

    test('주말에는 평일 할인이 적용되지 않는다.', () => {
      const visitDate = new VisitDate(weekend);
      const count = 3;
      const discount = Discount.getWeekdayDiscount(visitDate, count);
      expect(discount).toBe(0);
    });
  });

  describe('주말 할인', () => {
    test('평일에 해당하는 메뉴의 개수에 따라 할인이 적용된다.', () => {
      const visitDate = new VisitDate(weekend);
      const count = 3;
      const discount = Discount.getWeekendDiscount(visitDate, count);
      expect(discount).toBe(WEEKEND_DISCOUNT.price * count);
    });

    test('평일에는 주말 할인이 적용되지 않는다.', () => {
      const visitDate = new VisitDate(weekday);
      const count = 3;
      const discount = Discount.getWeekendDiscount(visitDate, count);
      expect(discount).toBe(0);
    });
  });

  describe('증정 이벤트', () => {
    test('특정 금액 이상이면 할인이 적용된다.', () => {
      const totalPrice = GIFT_DISCOUNT.triggerPrice;
      const discount = Discount.getGiftDiscount(totalPrice);
      expect(discount).toBe(GIFT_DISCOUNT.price);
    });

    test('특정 금액 이하이면 할인이 적용되지 않는다.', () => {
      const totalPrice = GIFT_DISCOUNT.triggerPrice - 1;
      const discount = Discount.getGiftDiscount(totalPrice);
      expect(discount).toBe(0);
    });
  });

  describe('특별 할인', () => {
    test('특정 날짜(별이 있는 날)에는 할인이 적용된다.', () => {
      const visitDate = new VisitDate(specialDay);
      const discount = Discount.getSpecialDiscount(visitDate);
      expect(discount).toBe(SPECIAL_DISCOUNT.price);
    });

    test('특정 날짜(별이 있는 날)가 아닌 날에는 할인이 적용되지 않는다.', () => {
      const visitDate = new VisitDate(nonSpecialDay);
      const discount = Discount.getSpecialDiscount(visitDate);
      expect(discount).toBe(0);
    });
  });
});
