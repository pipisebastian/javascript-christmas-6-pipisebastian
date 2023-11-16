import Order from '../src/domain/Order';
import Menu from '../src/domain/Menu';
import { MENU } from '../src/utils/constants/menu';
import { WEEKDAY_DISCOUNT, WEEKEND_DISCOUNT } from '../src/utils/constants/discount';
import { VALIDATION } from '../src/utils/constants/event';

describe('Order 클래스 테스트', () => {
  const mainMenu = Object.keys(MENU.main)[0];
  const drinkMenu = Object.keys(MENU.drink)[0];

  describe('예외 처리', () => {
    test('중복 주문의 경우, 예외가 발생한다.', () => {
      const orderInput = `${mainMenu}-1,${mainMenu}-1`;
      expect(() => new Order(orderInput)).toThrow('[ERROR]');
    });

    test('음료만 주문할 경우, 예외가 발생한다.', () => {
      const orderInput = `${drinkMenu}-1`;

      expect(() => new Order(orderInput)).toThrow('[ERROR]');
    });

    test('최대 주문수를 초과할 경우, 예외가 발생한다.', () => {
      const orderInput = `${mainMenu}-${VALIDATION.maxMenuCount + 1}`;

      expect(() => new Order(orderInput)).toThrow('[ERROR]');
    });

    test('메뉴 갯수가 숫자가 아닐 경우, 예외가 발생한다.', () => {
      const orderInput = `${mainMenu}-a`;

      expect(() => new Order(orderInput)).toThrow('[ERROR]');
    });

    test('메뉴의 최소 주문수 이하일 경우, 예외가 발생한다.', () => {
      const orderInput = `${mainMenu}-${VALIDATION.minMenuCount - 1}`;

      expect(() => new Order(orderInput)).toThrow('[ERROR]');
    });

    test.each([[`${mainMenu}~1`], [`${mainMenu}-1.${mainMenu}-1`]])(
      '지정된 형식의 입력값이 아닐 경우, 예외가 발생한다.',
      (menu) => {
        console.log(menu);
        expect(() => new Menu(menu)).toThrow('[ERROR]');
      },
    );

    test('유효한 주문일 경우, 예외가 발생하지 않는다.', () => {
      const orderInput = `${mainMenu}-1,${drinkMenu}-1`;
      expect(() => new Order(orderInput)).not.toThrow('[ERROR]');
    });
  });

  describe('주문 갯수 확인', () => {
    const weekdayMenuType = WEEKDAY_DISCOUNT.menuType;
    const weekendMenuType = WEEKEND_DISCOUNT.menuType;

    const weekdayMenu = Object.keys(MENU[weekdayMenuType])[0];
    const weekendMenu = Object.keys(MENU[weekendMenuType])[0];

    test('주문 중, 평일 할인이 적용되는 메뉴 갯수를 반환한다.', () => {
      const orderInput = `${weekdayMenu}-5,${weekendMenu}-3`;
      const order = new Order(orderInput);

      expect(order.getWeekdayMenuCount()).toBe(5);
    });

    test('주문 중, 평일 할인이 적용되는 메뉴 갯수를 반환한다.', () => {
      const orderInput = `${weekdayMenu}-5,${weekendMenu}-3`;
      const order = new Order(orderInput);

      expect(order.getWeekendMenuCount()).toBe(3);
    });
  });
});
