import AppController from '../controller/controller';
import { AppView } from '../view/appView';

class App {
    controller: AppController;
    view: AppView;
    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start(): void {
        document
            .querySelector('.sources')
            .addEventListener('click', (e: MouseEvent) => this.controller.getNews(e, <T>(data: T) => this.view.drawNews(data)));
        this.controller.getSources((data) => this.view.drawSources(data));
    }
}

export default App;
