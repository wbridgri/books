/**
 * Collect Data
 * Validate Data
 * Store Data
 * Display Dataq
 */

//Build a class to collect the data
class Book {
    constructor(bookTitle, bookAuthor, yrReleased, bookFormat,  category, genre) {
        this.bookInfo = {
            bookTitle: bookTitle,
            bookAuthor: bookAuthor,
            yrReleased: parseInt(yrReleased),
            bookFormat: bookFormat,
            category: category,
            genre: genre
        }
        this.library = []
    }

    returnGenres() {
        this.bookInfo.genre.forEach(item => {
            console.log(item)
        })
    }

    getDescription (bookTitle, bookAuthor, yrReleased) {
        return `${bookTitle} is a work by ${bookAuthor} first released in ${yrReleased}`
        
    }


}

/**
 * get submit Button
 */

const submitBtn = document.getElementById('submitBtn')

submitBtn.addEventListener('click', (e)=> {
    e.preventDefault()
    let obj = {}

    obj = {...getInfo()}

    const book = new Book(obj.title, obj.author, obj.year, obj.bookFormat, obj.category, obj.genres)

    
    book.returnGenres()
    buildCard(book.bookInfo, book.getDescription)
})

const getInfo = () => {
    const title = document.getElementById('bookTitle').value
    const author =document.getElementById('bookAuthor').value
    const year = document.getElementById('yrReleased').value

    const bookFormat = document.querySelector('input[name="bookFormat"]:checked').value  //any input with the name bookFormat

    const category = document.querySelector('input[name="category"]:checked').value

    const bookGenres = document.querySelectorAll('input[name="genre"]')

    let genres = []

    bookGenres.forEach(item => {
        item.checked ? genres = [...genres, item.value] : null
    })

    return { title, author, year, bookFormat, category, genres }



}

const buildCard = (obj, func) => {

    const row = document.getElementById('cardRow');

    const col = document.createElement('div');
    col.classList.add('col')

    const card = document.createElement('div');
    card.classList.add('card', 'h-100')

    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');

    const title = document.createElement('h3');
    title.classList.add('card-title', 'text-capitalize', 'text-primary')
    title.innerText = obj.bookTitle

    const author = document.createElement('p')
    author.classList.add('card-text', 'text-capitalize', 'text-danger', 'fst-italic')
    author.innerText = obj.bookAuthor

    const categoryText = document.createElement('p')
    categoryText.classList.add('card-text', 'text-capitalize')
    categoryText.innerText = obj.category

    const ul = document.createElement('ul')
    ul.setAttribute('id', 'genreList')

    obj.genre.forEach(genre => {
        const li = document.createElement('li')
        li.classList.add('list-item', 'text-capitalize')
        li.innerText = genre

        ul.appendChild(li)

    })

    const cardFooter = document.createElement('footer')
    cardFooter.classList.add('card-footer')

    const description = document.createElement('p')
    description.classList.add('card-text', 'fst-italic')

    description.innerText = func(obj.bookTitle, obj.bookAuthor, obj.yrReleased)

    cardBody.appendChild(title)
    cardBody.appendChild(author)
    cardBody.appendChild(categoryText)
    cardBody.appendChild(ul)

    cardFooter.appendChild(description)

    card.appendChild(cardBody)
    card.appendChild(cardFooter)

    col.appendChild(card)

    row.appendChild(col)






}

