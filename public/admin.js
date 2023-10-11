
// Your Code Here
let api_base_url = 'http://localhost:3001'

async function main() {

    let response = await fetch(api_base_url+'/listBooks')
    let books = await response.json()

 console.log(books)

 books.forEach(renderBook)

}



function renderBook(book){

    let root = document.querySelector('#root')

    let bookList = document.createElement('li')
    bookList.textContent = book.title

    let inputNumber = document.createElement('input')
    inputNumber.value = book.quantity

    let saveBook = document.createElement('button')
    saveBook.textContent = 'Save'

    saveBook.addEventListener ('click', () => {
        fetch(api_base_url + '/updateBook', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: book.id,
                quantity: inputNumber.value
            })
        })
    })


    bookList.append(inputNumber, saveBook)
    root.append(bookList)

}



main()