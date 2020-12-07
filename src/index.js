import createPage from './modules/initial-page-load';
import loadHomePage from './modules/home-page';
import loadMenuPage from './modules/menu-page';
import loadContactPage from './modules/contact-page';


createPage();
loadHomePage();

document.getElementById('home').onclick = loadHomePage;
document.getElementById('menu').onclick = loadMenuPage;
document.getElementById('contact').onclick = loadContactPage;