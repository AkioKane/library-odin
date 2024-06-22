const myLibrary = []

const btn = document.querySelector(".add-book")
const btnRead = document.querySelector(".read-btn")
const menu = document.querySelector(".menu")
const menuContainer = document.querySelector(".menu-container")
const overlay = document.querySelector(".overlay")
const btnSumbit = document.querySelector(".sumbit")
const cards = document.querySelector(".cards")

function Book() {
    // the constructor...
    for (i of myLibrary) {
        let newCard = document.createElement("div")
        newCard.classList.add("card")

        let head = document.createElement("h3")
        head.textContent = `"${i['title']}"`
        newCard.appendChild(head)

        let name = document.createElement("h3")
        name.textContent = i['author']
        newCard.appendChild(name)

        let pages = document.createElement("h3")
        pages.textContent = i['pages']
        newCard.appendChild(pages)

        let btnRead = document.createElement("button")
        btnRead.classList.add("read-btn")
        btnRead.textContent = "Read"
        newCard.appendChild(btnRead)

        let btnRemove = document.createElement("button")
        btnRemove.classList.add("remove-btn")
        btnRemove.textContent = "Remove"
        newCard.appendChild(btnRemove)

        cards.appendChild(newCard)
    }
}

function addBookToLibrary() {
    let title = document.querySelector(".title").value
    let author = document.querySelector(".author").value
    let pages = document.querySelector(".pages").value

    // let book = {
    //     'name': title,
    //     'author': author,
    //     'pages': pages,
    // }

    let book = new BookItem(title, author, pages)
    
    myLibrary.push(book)
    console.log(myLibrary)
    console.log(book)

    Book()
}

function BookItem(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

btn.addEventListener('click', function () {
    overlay.style.display = 'flex';
    menu.style.display = 'flex';
    document.body.appendChild(overlay);
    document.body.appendChild(menu);
})

menu.addEventListener('click', function (event) {
    if (!menuContainer.contains(event.target)) {
        document.body.removeChild(menu);
        document.body.removeChild(overlay);
    }
})

btnSumbit.addEventListener('click', function () {
    addBookToLibrary()

    document.body.removeChild(menu);
    document.body.removeChild(overlay);
})

btnRead.addEventListener('click', function () {
    btnRead.style.backgroundColor = 'red';
})