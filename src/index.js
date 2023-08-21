import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { books } from "./Books";
import Book from "./Book";

function BookList() {
  return (
    <>
      <h1 className="heading">amazon best sellers</h1>
      <div className="book-list">
        {books.map((book, index) => {
          return <Book {...book} key={book.id} number={index} />;
        })}
      </div>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
