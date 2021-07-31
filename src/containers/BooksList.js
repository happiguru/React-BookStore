import React from 'react';

function BooksList() {
  return (
    <div>
      <table border="1">
        <tr>
          <th><td>Book ID</td></th>
          <th><td>Book Title</td></th>
          <th><td>Book Category</td></th>
        </tr>
        <tr>
          <td>1</td>
          <td>Head First Mathematics</td>
          <td>Maths</td>
        </tr>
      </table>
    </div>
  );
}

export default BooksList;
