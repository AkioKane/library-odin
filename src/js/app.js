const myLibrary = [{'head': 'Hello', 'name': 'World', 'pages': 52}, {'head': 'Help', 'name': 'Me', 'pages': 25}]

const btn = document.querySelector(".add-book")
const menu = document.querySelector(".menu")
const menuContainer = document.querySelector(".menu-container")
const btnSumbit = document.querySelector(".sumbit")
const cards = document.querySelector(".cards")

function Book() {
    // the constructor...
    for (i of myLibrary) {
        let newCard = document.createElement("div")
        newCard.classList.add("card")

        let head = document.createElement("h3")
        head.textContent = `"${i['head']}"`
        newCard.appendChild(head)

        let name = document.createElement("h3")
        name.textContent = i['name']
        newCard.appendChild(name)

        let pages = document.createElement("h3")
        pages.textContent = i['pages']
        newCard.appendChild(pages)

        let btnRead = document.createElement("button")
        btnRead.textContent = "Read"
        newCard.appendChild(btnRead)

        let btnRemove = document.createElement("button")
        btnRemove.classList.add("remove-btn")
        btnRemove.textContent = "Remove"
        newCard.appendChild(btnRemove)

        cards.appendChild(newCard)
    }
}
Book()

function addBookToLibrary() {
    // do stuff here
}

btn.addEventListener('click', function () {
    menu.style.display = 'flex';
    document.body.appendChild(menu);
})

menu.addEventListener('click', function (event) {
    if (!menuContainer.contains(event.target)) {
        document.body.removeChild(menu);
    }
})
