const createHeadline = () => {
    let welcome = document.createElement('h3');
    welcome.textContent = "Welcome to the Odin Restaurant!";
    return welcome
}


const createSubtext = () => {
    let subtext = document.createElement('p');
    subtext.textContent = "Taste the best cuisine of the mediterranean..."
    return subtext
}





const loadHomePage = () => {
    let main = document.getElementById('main');
    main.innerHTML = "";
    main.appendChild(createHeadline());
    main.appendChild(createSubtext());
    // main.appendChild(createMenuCta());
}


export default loadHomePage;