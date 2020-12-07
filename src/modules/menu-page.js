const dishes = [
    { name: "Tuna Pasta", img_url: "https://www.themediterraneandish.com/wp-content/uploads/2020/03/tuna-pasta-recipe-3.jpg" },
    { name: "Gambas al Ajillo (Spanish Garlic Shrimp)", img_url: "https://www.themediterraneandish.com/wp-content/uploads/2020/11/gambas-al-ajillo-spanish-shrimp-recipe-7-720x722.jpg"},
    { name: "Slow Roasted Salmon", img_url: "https://www.themediterraneandish.com/wp-content/uploads/2020/10/slow-roasted-salmon-recipe-6-720x722.jpg"},
    { name: "Mediterranean Garlic Shrimp Pasta Recipe", img_url: "https://www.themediterraneandish.com/wp-content/uploads/2020/09/shrimp-pasta-recipe-4-720x722.jpg"},
    { name: "Quick & Healthy Greek Salmon Salad", img_url: "https://www.themediterraneandish.com/wp-content/uploads/2020/09/mediterranean-steamed-clams-recipe-7-720x722.jpg"},
    { name: "Mediterranean-Style Steamed Clams Recipe", img_url: "https://www.themediterraneandish.com/wp-content/uploads/2019/08/Salmon-salad-recipe-8-720x722.jpg"}
]


const createMenuCard = () => {
    let wrapper = document.createElement('div');
    wrapper.classList.add('menu-wrapper');
    dishes.forEach(dish => wrapper.appendChild(createMenuItem(dish)));
    return wrapper;
}

const createMenuItem = (dish) => {
    let item  = document.createElement('div');
    item.classList.add('menu-item');
    let img = document.createElement('img');
    img.setAttribute('src', dish.img_url);
    let name = document.createElement('p');
    name.textContent = dish.name;
    item.appendChild(img);
    item.appendChild(name);

    return item
}





const loadMenuPage = () => {
    let main = document.getElementById('main');
    main.innerHTML = "<h3>Our Menu</h3>";
    main.appendChild(createMenuCard());
}


export default loadMenuPage;