import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGE } from '../utils/messages/printMessages';

const InputView = {
  async readVisitDate() {
    return await Console.readLineAsync(INPUT_MESSAGE.visitDate);
  },

  async readOrder() {
    return await Console.readLineAsync(INPUT_MESSAGE.order);
  },
};

export default InputView;
