import React from 'react';

function BooksList() {
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
          <tr>
            <td>1</td>
            <td>Head First Mathematics</td>
            <td>Maths</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default BooksList;
