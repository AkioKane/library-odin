const myLibrary = [];

const btn = document.querySelector(".add-book");
const menu = document.querySelector(".menu");
const menuContainer = document.querySelector(".menu-container");
const overlay = document.querySelector(".overlay");
const btnSumbit = document.querySelector(".sumbit");
const cards = document.querySelector(".cards");

function Book(book) {
    let newCard = document.createElement("div");
    newCard.classList.add("card");

    let head = document.createElement("h3");
    head.textContent = `"${book.title}"`;
    newCard.appendChild(head);

    let name = document.createElement("h3");
    name.textContent = book.author;
    newCard.appendChild(name);

    let pages = document.createElement("h3");
    pages.textContent = book.pages;
    newCard.appendChild(pages);

    let btnRead = document.createElement("button");
    btnRead.classList.add("read-btn");
    btnRead.textContent = "Read";
    newCard.appendChild(btnRead);

    let btnRemove = document.createElement("button");
    btnRemove.classList.add("remove-btn");
    btnRemove.textContent = "Remove";
    newCard.appendChild(btnRemove);

    cards.appendChild(newCard);
}

function addBookToLibrary() {
    let title = document.querySelector(".title").value;
    let author = document.querySelector(".author").value;
    let pages = document.querySelector(".pages").value;

    let book = new BookItem(title, author, pages);
    
    myLibrary.push(book);
    console.log(myLibrary);
    console.log(book);

    Book(book);
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
});

overlay.addEventListener('click', function (event) {
    if (event.target === overlay) {
        menu.style.display = 'none';
        overlay.style.display = 'none';
    }
});

btnSumbit.addEventListener('click', function () {
    addBookToLibrary()

    document.body.removeChild(menu);
    document.body.removeChild(overlay);
})

cards.addEventListener('click', function(event) {
    if(event.target.classList.contains('read-btn')) {
        event.target.style.backgroundColor = 'red';
    } else if(event.target.classList.contains('remove-btn')) {
        let card = event.target.parentElement;
        let title = card.querySelector('h3').textContent.replace(/"/g, '');
        myLibrary = myLibrary.filter(book => book.title !== title);
        cards.removeChild(card);
    }
});
