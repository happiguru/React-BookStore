import React from 'react';
import PropTypes from 'prop-types';
import './Book.css';

const Book = ({
  bookId, title, category, handleRemoveBook,
}) => (
  <div className="book-container">
    <div className="book-details">
      <div>
        <div>{category}</div>
        <div className="title list-text general">{title}</div>
        <div className="author list-text">Suzannie Collins</div>
      </div>
      <div className="actions">
        <button type="button">Comments</button>
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
        <button type="button">Edit</button>
      </div>
    </div>
    <div className="complete-container">
      <div className="complete">
        <div className="circle" />
        <div className="complete-value">
          <span className="percent general list-text">
            {`${Math.floor(Math.random() * 100)} %`}
          </span>
          <span className="faded-text general list-text">Completed</span>
        </div>
      </div>
      <div className="update">
        <span className="title general list-text">CURRENT CHAPTER</span>
        <span className="chapter general list-text">{`Chapter ${Math.floor(Math.random() * 34 + 1)}`}</span>
        <button type="button">UPDATE PROGRESS</button>
      </div>
    </div>
  </div>
);

Book.propTypes = {
  bookId: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  handleRemoveBook: PropTypes.func.isRequired,
};

export default Book;
