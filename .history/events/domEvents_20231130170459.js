import {
  deleteSingleAuthor, getAuthors, getSingleAuthor, updateAuthor, createAuthor
}
  from '../api/authorData';
import { deleteBook, getBooks, getSingleBook } from '../api/bookData';
import { showAuthors } from '../pages/authors';
import { showBooks } from '../pages/books';
import addBookForm from '../components/forms/addBookForm';
import addAuthorForm from '../components/forms/addAuthorForm';

const domEvents = () => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    // TODO: CLICK EVENT FOR DELETING A BOOK
    if (e.target.id.includes('delete-book')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        console.warn('CLICKED DELETE BOOK', e.target.id);
        console.warn(e.target.id.split('--'));
      }
    }

    // TODO: CLICK EVENT FOR SHOWING FORM FOR ADDING A BOOK
    if (e.target.id.includes('edit-book-btn')) {
      const [, firebaseKey] = e.target.id.split('--');

      getSingleBook(firebaseKey).then((bookObj) => addBookForm(bookObj));
    }
    if (e.target.id.includes('add-book-btn')) {
      addBookForm();
    }
    // TODO: CLICK EVENT EDITING/UPDATING A BOOK
    if (e.target.id.includes('edit-book-btn')) {
      const [, firebaseKey] = e.target.id.split('--');

      getSingleBook(firebaseKey).then((bookObj) => addBookForm(bookObj));
      // getSingleBook(firebaseKey).then(addBookForm); // using the callback method
    }
    // TODO: CLICK EVENT FOR VIEW BOOK DETAILS
    if (e.target.id.includes('delete-book')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        console.warn('CLICKED DELETE BOOK', e.target.id);
        const [, firebaseKey] = e.target.id.split('--');
        deleteBook(firebaseKey).then(() => {
          getBooks().then(showBooks);
        });
      }
    }

    // FIXME: ADD CLICK EVENT FOR DELETING AN AUTHOR
    if (e.target.id.includes('delete-author-btn')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        console.warn('DELETE AUTHOR', e.target.id);
        const [, firebasekey] = e.target.id.split('--');
        deleteSingleAuthor(firebasekey).then(() => {
          getAuthors().then(showAuthors);
        });
      }
    }

    // FIXME: ADD CLICK EVENT FOR SHOWING FORM FOR ADDING AN AUTHOR
    if (e.target.id.includes('add-author-btn')) {
      addAuthorForm();
    }
    if (e.target.id.includes('update-author')) {
      const [, firebaseKey] = e.target.id.split('--');

      getSingleAuthor(firebaseKey).then((authorObj) => addAuthorForm(authorObj));
    }
    if (e.target.id.includes('update-author')) {
      const [, firebaseKey] = e.target.id.split('--');

      getSingleBook(firebaseKey).then((bookObj) => addBookForm(bookObj));
      // getSingleBook(firebaseKey).then(addBookForm); // using the callback method
    }
    if (e.target.id.includes('submit-author')) {
      const firstNameElement = document.querySelector('#first_name');
      const lastNameElement = document.querySelector('#last_name');
    
      console.log('First name element:', firstNameElement);
      console.log('First name value:', firstNameElement.value);
      console.log('Last name element:', lastNameElement);
      console.log('Last name value:', lastNameElement.value);
    
      const payload = {
        email: document.querySelector('#email').value,
        favorite: 'false',
        first_name: firstNameElement.value,
        last_name: lastNameElement.value
      };
    
      createAuthor(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };
    
        updateAuthor(patchPayload).then(() => {
          getAuthors().then(showAuthors);
        });
      });
    }
    // if (e.target.id.includes('submit-author')) {
    //   const payload = {
    //     email: document.querySelector('#email').value,
    //     favorite: 'false',
    //     first_name: document.querySelector('#first_name').value,
    //     last_name: document.querySelector('#last_name').value
    //   };
    //   createAuthor(payload).then(({ name }) => {
    //     const patchPayload = { firebaseKey: name };

    //     updateAuthor(patchPayload).then(() => {
    //       getAuthors().then(showAuthors);
    //     });
    //   });
    // }
    // FIXME: ADD CLICK EVENT FOR EDITING AN AUTHOR
  });
};

export default domEvents;