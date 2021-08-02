import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../components/Book';
import initialState from '../default/index';

function BooksList({ books }) {
  return (
    <div>
      <table border="1">
        <thead>
          <tr>
            <th>Book ID</th>
            <th>Book Title</th>
            <th>Book Category</th>
          </tr>
        </thead>
        <tbody>
          {
            books.map((book) => (
              <Book
                key={book.bookId}
                bookId={book.bookId}
                title={book.title}
                category={book.category}
              />
            ))
          }
        </tbody>
      </table>
    </div>
  );
}

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object),
};

BooksList.defaultProps = {
  books: initialState,
};

const mapStateToProps = ({ books }) => ({
  books,
});

export default connect(mapStateToProps)(BooksList);
