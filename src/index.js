import './styles.css';
import menu from './menu.json';
import menuTemplate from './template/menu.hbs';

// const menuData = {
//     menu,
// }

// console.log(menuData);
const menuHtml = menuTemplate(menu);
console.log(menuHtml)