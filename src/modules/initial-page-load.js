const createNav = ()  => {
    let nav = document.createElement('nav');

    let navLinks = document.createElement('div');
    navLinks.classList.add('nav-links');

    navLinks.appendChild(createNavLink('home', 'Home'));
    navLinks.appendChild(createNavLink('menu', 'Menu'));
    navLinks.appendChild(createNavLink('contact', 'Contact'));
  

    let logo = document.createElement('div');
    logo.classList.add('logo');
    logo.innerHTML = "<h1> Odin<span>Restaurant</span></h1>"


    nav.appendChild(logo);
    nav.appendChild(navLinks);

    return nav
}

const createNavLink = (id, text) => {
    let link = document.createElement('p');
    link.setAttribute('id', id);
    link.textContent = text;
    return link
}

const createHeader = () => {
    let header = document.createElement('header');

    let cta = document.createElement('h2');
    cta.textContent = "The Best Sea Food"

    let button = document.createElement('a');
    button.textContent  =  "Book Your Table"

    header.appendChild(cta);
    header.appendChild(button);
    return header
}


const createPage = () => {
    const content = document.getElementById('content');
    content.appendChild(createNav());
    content.appendChild(createHeader());
    let main = document.createElement('section');
    main.setAttribute('id', 'main');
    content.appendChild(main)
}




export default createPage;