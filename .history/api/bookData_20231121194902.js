import client from '../utils/client';
export {
  getBooks,
  createBook,
  booksOnSale,
  deleteBook,
  getSingleBook,
  updateBook
};

// API CALLS FOR BOOKS

const endpoint = client.databaseURL;

// TODO: GET BOOKS
const getBooks = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/books.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

// TODO: DELETE BOOK
const deleteBook = () => {};

// TODO: GET SINGLE BOOK
const getSingleBook = () => {};

// TODO: CREATE BOOK
const createBook = () => {};

// TODO: UPDATE BOOK
const updateBook = () => {};

// TODO: FILTER BOOKS ON SALE
const booksOnSale = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/books.json?orderBy="sale"&equalTo=true`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .ca

// TODO: STRETCH...SEARCH BOOKS
