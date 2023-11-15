import Menu from '../src/domain/Menu';
import { MENU, MENU_TYPE } from '../src/utils/constants/menu';

describe('Menu 클래스 테스트', () => {
  describe('예외 처리', () => {
    test.each([['달걀볶음밥'], ['123'], ['abc123']])('존재하지 않는 메뉴의 경우 예외가 발생한다.', (menu) => {
      expect(() => new Menu(menu)).toThrow('[ERROR]');
    });

    test('존재하는 메뉴의 경우, 예외가 발생하지 않는다.', () => {
      const menuName = Object.keys(MENU.main)[0];
      expect(() => new Menu(menuName)).not.toThrow('[ERROR]');
    });
  });
});
