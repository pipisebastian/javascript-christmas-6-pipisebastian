import VisitDate from '../src/domain/VisitDate';
import { EVENT } from '../src/utils/constants/event';

describe('VisitDate 클래스 테스트', () => {
  describe('예외 처리', () => {
    test('유효한 날짜 범위가 아닐 경우, 예외가 발생한다.', () => {
      const visitDate = () => new VisitDate(EVENT.startDate - 1);
      expect(visitDate).toThrow('[ERROR]');
    });

    test('숫자 타입이 아닌 경우, 예외가 발생한다.', () => {
      const visitDate = () => new VisitDate('a');
      expect(visitDate).toThrow('[ERROR]');
    });

    test('유효한 날짜의 경우, 예외가 발생하지 않는다.', () => {
      const visitDate = () => new VisitDate(EVENT.startDate);
      expect(visitDate).not.toThrow('[ERROR]');
    });
  });

  describe('할인 적용일 판별', () => {
    const weekend = 2;
    const weekday = 3;
    const christmasDay = 25;
    const nonChristmasDay = 26;
    const specialDay = 3;
    const nonSpecialDay = 4;

    test('크리스마스 디데이인지 판별한다.', () => {
      expect(new VisitDate(christmasDay).isChristmasDay()).toBe(true);
      expect(new VisitDate(nonChristmasDay).isChristmasDay()).toBe(false);
    });

    test('평일인지 판별한다.', () => {
      expect(new VisitDate(weekday).isWeekday()).toBe(true);
      expect(new VisitDate(weekend).isWeekday()).toBe(false);
    });

    test('주말인지 판별한다.', () => {
      expect(new VisitDate(weekend).isWeekend()).toBe(true);
      expect(new VisitDate(weekday).isWeekend()).toBe(false);
    });

    test('특별한 날인지 판별한다.', () => {
      expect(new VisitDate(specialDay).isSpecialDay()).toBe(true);
      expect(new VisitDate(nonSpecialDay).isSpecialDay()).toBe(false);
    });
  });
});
