import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createBook } from '../actions/index';
import { bookCategories } from '../helpers/index';

function BooksForm({ createBook }) {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');

  const handleTitleChange = (e) => {
    setTitle(() => e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(() => e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title && category) {
      createBook({
        bookId: Math.floor(Math.random() * 1000),
        title,
        category,
      });
      setTitle('');
      setCategory('');
    }
  };

  return (
    <>
      <form>
        <div className="input-group">
          <input
            type="text"
            value={title}
            onChange={handleTitleChange}
          />
        </div>
        <div className="input-group">
          <select
            name="book-cat"
            id="categories"
            value={category}
            onChange={handleCategoryChange}
          >
            <option value="">
              none
            </option>
            {
              bookCategories.map((category) => (
                <option key={`key-${category}`} value={category}>{category}</option>
              ))
            }
          </select>
        </div>
        <button type="button" onClick={handleSubmit}>Submit</button>
      </form>
    </>
  );
}

BooksForm.propTypes = {
  createBook: PropTypes.func.isRequired,
};
const mapDispatchToProps = { createBook };

export default connect(null, mapDispatchToProps)(BooksForm);
