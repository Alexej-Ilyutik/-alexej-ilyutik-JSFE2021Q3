import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://nodenews.herokuapp.com/', {
            apiKey: 'b97faed1f6d541d2848c762baf9a7737', // https://newsapi.org/
        });
    }
}

export default AppLoader;
