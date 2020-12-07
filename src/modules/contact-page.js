const loadContactPage = () => {
    let main = document.getElementById('main');
    main.innerHTML = "<h3>Contact Us</h3>"
    let mailLink = document.createElement('a');
    mailLink.textContent = "info@odinrestaurant.com"
    mailLink.setAttribute('href', "#");
    main.appendChild(mailLink);
}

export default loadContactPage;