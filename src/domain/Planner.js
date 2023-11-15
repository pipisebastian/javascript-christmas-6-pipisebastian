import Discount from './Discount';
import Order from './Order';
import VisitDate from './VisitDate';
import { BADGE, EVENT } from '../utils/constants/event';

class Planner {
  #visitDate;
  #order;
  #price;

  setVisitDate(visitDate) {
    this.#visitDate = new VisitDate(visitDate);
  }

  setOrder(order) {
    this.#order = new Order(order);
    this.#price = Array.from(this.#order.getOrder().entries()).reduce(
      (price, [menu, count]) => price + menu.getPrice() * count,
      0,
    );
  }

  getVisitDate() {
    return this.#visitDate.getVisitDate();
  }

  getOrder() {
    return this.#order.getOrder();
  }

  getPrice() {
    return this.#price;
  }

  caculateDiscount() {
    if (this.#price < EVENT.discountTriggerPrice) {
      return [{}, 0];
    }
    const discount = {
      christmas: Discount.getChristmasDiscount(this.#visitDate),
      weekday: Discount.getWeekdayDiscount(this.#visitDate, this.#order.getWeekdayMenuCount()),
      weekend: Discount.getWeekendDiscount(this.#visitDate, this.#order.getWeekendMenuCount()),
      special: Discount.getSpecialDiscount(this.#visitDate),
      gift: Discount.getGiftDiscount(this.#price),
    };
    const discountPrice = Object.values(discount).reduce((total, discount) => total + discount, 0);
    this.#price -= discountPrice - discount.gift;

    return [discount, discountPrice];
  }

  getBadge(discountPrice) {
    const badge = Object.values(BADGE).find(({ price }) => discountPrice >= price);

    return badge?.name;
  }
}

export default Planner;
