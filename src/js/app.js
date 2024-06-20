const btn = document.querySelector(".add-book")
const menu = document.querySelector(".menu")


btn.addEventListener('click', function () {
    menu.style.display = 'flex';
    document.body.appendChild(menu)
})

menu.addEventListener('click', function () {
    menu.style.display = 'none';
    document.body.appendChild(menu)
})