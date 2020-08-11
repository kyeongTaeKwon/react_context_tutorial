import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";
import BookDetail from "./BookDetail";
const BookList = () => {
  const { books } = useContext(BookContext);
  return books.length ? (
    <div className="book-list">
      <ul>
        {books.map(book => (
          <BookDetail key={book.id} book={book} />
        ))}
      </ul>
    </div>
  ) : (
    <div className="empty">No books to read.</div>
  );
};
export default BookList;
