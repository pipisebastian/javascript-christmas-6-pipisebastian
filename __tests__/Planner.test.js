import Planner from '../src/domain/Planner';
import { MENU } from '../src/utils/constants/menu';
import { EVENT } from '../src/utils/constants/event';

describe('Planner 클래스 테스트', () => {
  const planner = new Planner();
  planner.setVisitDate('24');

  describe(`이벤트 적용 - ${EVENT.discountTriggerPrice}원 이상 주문 시`, () => {
    beforeEach(() => {
      planner.setOrder('티본스테이크-1,바비큐립-2');
    });
    const price = MENU.main.티본스테이크 + MENU.main.바비큐립 * 2;

    test('할인 전, 결제 금액이 설정된다.', () => {
      expect(planner.getPrice()).toBe(price);
    });

    test('메뉴의 할인 금액이 증가된다.', () => {
      const [_, discountPrice] = planner.caculateDiscount();
      expect(discountPrice).toBeGreaterThan(0);
    });

    test('할인 후, 결제 금액이 감소된다.', () => {
      planner.caculateDiscount();
      expect(planner.getPrice()).toBeLessThan(price);
    });
  });

  describe(`이벤트 미적용 - ${EVENT.discountTriggerPrice}원 미만 주문 시`, () => {
    beforeEach(() => {
      planner.setOrder('아이스크림-1');
    });
    const price = MENU.dessert.아이스크림;

    test('할인 전, 결제 금액이 설정된다.', () => {
      expect(planner.getPrice()).toBe(price);
    });

    test('메뉴의 할인 금액은 없다.', () => {
      const [_, discountPrice] = planner.caculateDiscount();
      expect(discountPrice).toBe(0);
    });

    test('할인 후, 결제 금액은 변하지 않는다.', () => {
      planner.caculateDiscount();
      expect(planner.getPrice()).toBe(price);
    });
  });

  describe('배지 설정', () => {
    test.each([
      [1000, undefined],
      [6000, '별'],
      [10000, '트리'],
      [50000, '산타'],
    ])('금액에 따라 배지가 설정된다.', (discountPrice, expectedBadge) => {
      const badge = planner.getBadge(discountPrice);
      expect(badge).toBe(expectedBadge);
    });
  });
});
