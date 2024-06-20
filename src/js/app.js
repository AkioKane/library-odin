const btn = document.querySelector(".add-book")
const menu = document.querySelector(".menu")
const menuContainer = document.querySelector(".menu-container")
const btnSumbit = document.querySelector(".sumbit")

btn.addEventListener('click', function () {
    menu.style.display = 'flex';
    document.body.appendChild(menu);
})

menu.addEventListener('click', function (event) {
    if (!menuContainer.contains(event.target)) {
        document.body.removeChild(menu);
    }
})
