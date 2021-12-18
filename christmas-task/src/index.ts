// const path = require('path');
import './scss/style.scss';
import './scss/reset.scss';

import Header from './template/Header/header';
import Main from './template/Main/main';
import Footer from './template/Footer/footer';

const header = document.querySelector('header');
header.append(Header);

const main = document.querySelector('main');
main.append(Main);

const footer = document.querySelector('footer');
footer.append(Footer);

// console.log('Hello World!');
