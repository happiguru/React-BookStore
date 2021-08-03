import React from 'react';
import PropTypes from 'prop-types';

const Book = ({
  bookId, title, category, handleRemoveBook,
}) => (
  <tr>
    <td>{bookId}</td>
    <td>{title}</td>
    <td>{category}</td>
    <td>
      <button
        onClick={() => {
          const book = {
            bookId,
            title,
            category,
          };
          handleRemoveBook(book);
        }}
        type="button"
      >
        Remove
      </button>
    </td>
  </tr>
);

Book.propTypes = {
  bookId: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  handleRemoveBook: PropTypes.func.isRequired,
};

export default Book;
