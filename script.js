let library;
//book constructor
class Book{
    constructor(title, author, pages, status){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.status = status;
    }
}
//UI class for adding and deleting entries
class UI{
    static displayBooks(){
        const storedBooks= [
            {
                title:'Book One',
                author:'Dru Kun',
                pages: 100,
                status: 'Read',
            },
            {
                title:'Book 2',
                author:'Ran Dom',
                pages: 101,
                status: 'Not read',
            }
        ];

        const books = storedBooks;

        books.forEach((book)=>UI.addBookToList(book));
    }
    //adds books to list
    static addBookToList(book){
        const list = document.getElementById('book-list');

        const row = document.createElement('tr');

        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.pages}</td>
        <td><button class='status-button'>${book.status}</button></td>
        <td><button class='delete'>Delete</button></td>
        `;

        list.appendChild(row)
    }
     
    static changeStatus(el){
        if(el.classList.contains('status-button')){
            if(el.innerHTML === 'Read'){
                el.innerHTML = 'Not read'
            }else{
                el.innerHTML = 'Read'
            }
        }
    }
    //delete entry
    static deleteBook(el){
        if(el.classList.contains('delete')){
            el.parentElement.parentElement.remove();
        }
    }
    //clear fields
    static clearFields(){
        document.querySelector('#name').value = ' ';
        document.querySelector('#author').value = ' ';
        document.querySelector('#pages').value = '';
        document.querySelector('#status').value = '';
    }
}
//displays books
document.addEventListener('DOMContentLoaded',UI.displayBooks);
//how values are submited to create book entry
document.querySelector('#bookForm').addEventListener('submit', (e)=>{

    e.preventDefault();

    const title = document.querySelector('#name').value;
    const author = document.querySelector('#author').value;
    const pages = document.querySelector('#pages').value;
    const status = document.querySelector('#status').value;

    if(title===''||author===''||pages===''||status===''){
        alert("Please fill in all fields");
    }else{
        const book = new Book(title, author, pages, status);

        UI.addBookToList(book);
    
        UI.clearFields();
    }
});
//remove books
document.querySelector('#book-list').addEventListener('click', (e)=>{
    UI.deleteBook(e.target)
});

document.querySelector('#book-list').addEventListener('click', (e)=>{
    UI.changeStatus(e.target)
});
