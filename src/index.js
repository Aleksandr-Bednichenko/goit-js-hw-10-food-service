import './styles.css';
import menu from './menu.json';
import menuTemplate from './template/menu.hbs';

const menuData = {
    menu,
};

const menuHtml = menuTemplate(menuData);
document.querySelector('.js-menu').innerHTML = menuHtml;