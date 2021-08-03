const initialState = {
  books: [
    {
      bookId: Math.floor(Math.random() * 1000),
      title: 'Siddartha',
      category: 'Biography',
    },
    {
      bookId: Math.floor(Math.random() * 1000),
      title: 'Doors of perception',
      category: 'Learning',
    },
    {
      bookId: Math.floor(Math.random() * 1000),
      title: 'Divine Comedy',
      category: 'Comedy',
    },
  ],
};

export default initialState;
