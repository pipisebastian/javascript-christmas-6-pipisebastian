import { Console } from '@woowacourse/mission-utils';
import { OUTPUT_MESSAGE, TITLE_MESSAGE, DISCOUNT_MESSAGE } from '../utils/messages/printMessages';

const OutputView = {
  printPreviewTitle(date) {
    Console.print(OUTPUT_MESSAGE.preview(date));
  },

  printOrder(order) {
    Console.print(TITLE_MESSAGE.order);

    Array.from(order.entries()).forEach(([menu, menuCount]) => {
      Console.print(OUTPUT_MESSAGE.menu(menu.getName(), menuCount));
    });
  },

  printPriceBeforeDiscount(price) {
    Console.print(TITLE_MESSAGE.priceBeforeDiscount);
    Console.print(OUTPUT_MESSAGE.price(price));
  },

  printGift(gift) {
    Console.print(TITLE_MESSAGE.gift);
    gift ? Console.print(OUTPUT_MESSAGE.gift()) : Console.print(OUTPUT_MESSAGE.nothing);
  },

  printDiscountInfo(discounts) {
    Console.print(TITLE_MESSAGE.discount);

    if (Object.values(discounts).every((value) => value === 0)) {
      Console.print(OUTPUT_MESSAGE.nothing);
      return;
    }

    Object.entries(discounts).forEach(([discountName, discountPrice]) => {
      if (discountPrice !== 0) {
        Console.print(DISCOUNT_MESSAGE[discountName](discountPrice));
      }
    });
  },

  printTotalDiscount(price) {
    Console.print(TITLE_MESSAGE.totalDiscount);
    Console.print(price ? OUTPUT_MESSAGE.discountPrice(price) : OUTPUT_MESSAGE.price(price));
  },

  printPriceAfterDiscount(price) {
    Console.print(TITLE_MESSAGE.priceAfterDiscount);
    Console.print(OUTPUT_MESSAGE.price(price));
  },

  printBadge(badge) {
    Console.print(TITLE_MESSAGE.badge);
    badge ? Console.print(badge) : Console.print(OUTPUT_MESSAGE.nothing);
  },

  printError(errorMessage) {
    Console.print(errorMessage);
  },
};

export default OutputView;
