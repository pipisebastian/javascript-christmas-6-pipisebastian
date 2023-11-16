import { MENU } from '../utils/constants/menu';
import { validateMenuName } from '../utils/validators/validateMenu';

class Menu {
  #name;
  #price;
  #type;

  constructor(name) {
    validateMenuName(name);
    this.#name = name;

    Object.entries(MENU).forEach(([type, menus]) => {
      if (menus.hasOwnProperty(name)) {
        this.#price = menus[name];
        this.#type = type;
      }
    });
  }

  getPrice() {
    return this.#price;
  }

  getName() {
    return this.#name;
  }

  getType() {
    return this.#type;
  }
}

export default Menu;
