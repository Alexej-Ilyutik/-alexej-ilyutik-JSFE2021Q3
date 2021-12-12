import htmlToElement from '../../utils/htmlToElement';

import './header.html';
import './header.scss';

import Header from './header.html';
// const header = Header;
const header = htmlToElement(Header);
export default header;
