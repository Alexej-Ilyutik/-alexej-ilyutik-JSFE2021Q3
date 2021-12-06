import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: 'b97faed1f6d541d2848c762baf9a7737', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
