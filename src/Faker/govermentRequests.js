const axios = require('axios');

axios.get('http://localhost:3001/Dates?booked=0&&day=1')
    .then((response) => {
        console.log(response.data)
    })
    .catch((error) => {
        console.log(error)
    });
/*
axios.post('http://localhost:3001/authors', {name : "Jane Doe", country : "Hungary"})
    .then((res) => {console.log(res)})
    .catch((err) => {console.log(err)});
*/

axios.get('http://localhost:3001/Dates?booked=0')
    .then((res) => {
        res.data.forEach((date) => {
            axios.get('http://localhost:3001/books')
                .then((respBooks) => {
                    books = respBooks.data.filter((book) => {
                        let isAuthored = false;
                        book.authors.forEach((bookAuthor) => {
                            if (author.id === bookAuthor.id) {
                                isAuthored = true;
                            }
                        });
                        return isAuthored;
                    });
                    console.log({author: author, books: books});
                }).catch((err) => {
                console.log(err)
            })
        });
        console.log(res.data);
    })
    .catch((err) => {
        console.log(err)
    });
