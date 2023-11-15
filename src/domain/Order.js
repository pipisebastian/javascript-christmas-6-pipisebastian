import Menu from './Menu';
import { WEEKDAY_DISCOUNT, WEEKEND_DISCOUNT } from '../utils/constants/discount';
import { DELIMITER } from '../utils/constants/event';
import { validateDuplicateOrder, validateOnlyDrink, validateTotalMenuCount } from '../utils/validators/vaildateOrder';
import { validateMenuCount } from '../utils/validators/validateMenu';

class Order {
  #order;

  constructor(orderInput) {
    this.#order = new Map();

    orderInput.split(DELIMITER.orderDelimiter).forEach((menu) => {
      this.#addMenu(menu);
    });

    validateOnlyDrink(this.#order);
    validateTotalMenuCount(this.#order);
  }

  #addMenu(menu) {
    const [name, count] = menu.split(DELIMITER.menuDelimiter);

    if (validateDuplicateOrder(name, this.#order)) {
      validateMenuCount(Number(count));
      this.#order.set(new Menu(name), Number(count));
    }
  }

  getWeekdayMenuCount() {
    return Array.from(this.#order.entries())
      .filter(([menu]) => WEEKDAY_DISCOUNT.menuType === menu.getType())
      .reduce((totalCount, [_, count]) => totalCount + count, 0);
  }

  getWeekendMenuCount() {
    return Array.from(this.#order.entries())
      .filter(([menu]) => WEEKEND_DISCOUNT.menuType === menu.getType())
      .reduce((totalCount, [_, count]) => totalCount + count, 0);
  }

  getOrder() {
    return this.#order;
  }
}

export default Order;
