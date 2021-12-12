import htmlToElement from '../../utils/htmlToElement';

import './main.html';
import './main.scss';

import Main from './main.html';
// const header = Header;
const main = htmlToElement(Main);
export default main;
