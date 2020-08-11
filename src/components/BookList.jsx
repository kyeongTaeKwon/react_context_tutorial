import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { BookContext } from "../contexts/BookContext";

const BookList = () => {
  const { isLightTheme, dark, light } = useContext(ThemeContext);
  const { books } = useContext(BookContext);
  const theme = isLightTheme ? light : dark;
  return (
    <div>
      <div
        className="book-list"
        style={{ color: theme.syntax, background: theme.bg }}
      >
        <ul>
          {books.map(book => (
            <li style={{ background: theme.ui }} key={book.id}>
              {book.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BookList;
