import getSingleBook from './a/bookData';
import getSingleAuthor from '../api/authorData';
// TODO: Get data for viewBook
const getBookDetails = (firebaseKey) => new Promise((resolve, reject) => {
  // GET SINGLE BOOK
  getSingleBook(firebaseKey).then((bookObject) => { // returns single book object
    getSingleAuthor(bookObject.author_id) // we nest this promise so that we can use the book object
      .then((authorObject) => resolve({ ...bookObject, authorObject }));
    }).catch(reject);
  // GET AUTHOR
  // Create an object that has book data and an object named authorObject02
  });
export default getBookDetails;
