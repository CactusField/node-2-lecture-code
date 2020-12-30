const books = [{id:0, title:'As a Man Thinketh', author: 'James Allen'}];
let id = 1;

module.exports ={
    getBooks: (req, res) =>{
        res.status(200).send(books);
    },
    addBook: (req, res) =>{
        const {title, author} = req.body;


        let book = {
            id: id,
            title: title,
            author: author
        }


        books.push(book);
        id++;
        res.status(200).send(books);

    },
    updateBook: (req, res) =>{
        const {id}= req.params;

        let editBookIndex = book.findIndex(element => element.id === +id);

        books[editBookIndex] = {
            id: books[editBookIndex].id,
            title: req.body.title || editBook.title,
            author: req.body.author || editBook.author
        }

        res.sendStatus(200);

    },
    deleteBook: (req, res) =>{
        const {id} = req.params;

        let bookId = books.findIndex(element => element.id === +id);
        books.splice(bookId, 1);

        res.sendStatus(200);
    }
}