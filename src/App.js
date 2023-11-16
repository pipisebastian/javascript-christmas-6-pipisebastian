import ChristmasController from './controller/ChristmasController';

class App {
  async run() {
    const christmasController = new ChristmasController();
    await christmasController.play();
  }
}

export default App;
