import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../components/Book';
import { removeBook, changeFilter } from '../actions/index';
import CategoryFilter from '../components/CategoryFilter';
import { getFilteredBooks } from '../helpers/index';
import './BooksList.css';

const BooksList = ({
  books,
  filter,
  removeBook,
  changeFilter,
}) => {
  const filteredBooks = getFilteredBooks(books, filter);

  const book = filteredBooks.map((book) => (
    <Book
      key={book.bookId}
      bookId={book.bookId}
      title={book.title}
      category={book.category}
      handleRemoveBook={removeBook}
    />
  ));
  return (
    <>
      <div className="header-container">
        <ul className="header">
          <li className="header__logo header__link general">
            Bookstore CMS
          </li>
          <li className="header__book_link header__link general">
            BOOKS
          </li>
          <li className="header__link list-text general">
            <CategoryFilter
              handleFilterChange={changeFilter}
            />
          </li>
        </ul>
        <div className="user">
          <span className="user-logo" />
        </div>
      </div>
      <div className="books-container filter-container">
        {book}
      </div>
    </>
  );
};

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object),
  removeBook: PropTypes.func.isRequired,
  changeFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

BooksList.defaultProps = {
  books: [],
};

const mapDispatchToProps = { removeBook, changeFilter };

const mapStateToProps = ({ books, filter }) => ({
  books,
  filter,
});

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
