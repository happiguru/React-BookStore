import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../components/Book';
import { removeBook } from '../actions/index';

function BooksList({ books, removeBook }) {
  const book = books.map((book) => (
    <Book
      key={book.bookId}
      bookId={book.bookId}
      title={book.title}
      category={book.category}
      handleRemoveBook={removeBook}
    />
  ));
  return (
    <div>
      <table border="1">
        <thead>
          <tr>
            <th>Book ID</th>
            <th>Book Title</th>
            <th>Book Category</th>
            <th>Remove Book</th>
          </tr>
        </thead>
        <tbody>
          {book}
        </tbody>
      </table>
    </div>
  );
}

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object),
  removeBook: PropTypes.func.isRequired,
};

BooksList.defaultProps = {
  books: [],
};

const mapDispatchToProps = { removeBook };

const mapStateToProps = ({ books }) => ({
  books,
});

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
