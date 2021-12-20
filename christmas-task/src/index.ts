// const path = require('path');
import './scss/style.scss';
import './scss/reset.scss';

import Header from './template/Header/header';
import Main from './template/Main/main';
import Main1 from "./template/Main1/main1";
import Footer from './template/Footer/footer';


const header = document.querySelector('header');
header.append(Header);

const main = document.querySelector('main');
main.append(Main);

const main1 = document.querySelector("main");
// main1.append(Main1);

const footer = document.querySelector('footer');
footer.append(Footer);

const MAIN_BTN = document.getElementById("btn");

function showMain1() {
  Main.remove();
  main.appendChild(Main1);
  console.log("Hello World!");
}

MAIN_BTN.onclick = () => {
  showMain1();
};

