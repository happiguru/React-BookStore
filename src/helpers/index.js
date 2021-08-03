export const bookCategories = [
  'Action',
  'Biography',
  'History',
  'Horror',
  'Kids',
  'Learning',
  'Sci-Fi',
];

export const getFilteredBooks = (books, filter) => {
  if (filter === 'ALL') {
    return books;
  }
  return books.filter((book) => book.category === filter);
};
