import React, { useState, useEffect } from "react";
import styles from "./Books.module.css";

function Books() {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const API_URL = "https://anapioficeandfire.com/api/books";

  useEffect(() => {
    async function fetchBooks() {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setBooks(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching books:", error);
        setIsLoading(false);
      }
    }
    fetchBooks();
  }, []);

  if (isLoading) {
    return <p className={styles.body}>Loading...</p>;
  }

  return (
    <div className={styles.body}>
      <h1 className={styles.h1}>A Song of Ice and Fire - Books</h1>
      <ul className={styles.ul}>
        {books.map((book) => (
          <li className={styles.li} key={book.url}>
            <h2 className={styles.h2}>{book.name}</h2>
            <p className={styles.p}>Author: {book.authors.join(", ")}</p>
            <p className={styles.p}>Number of Pages: {book.numberOfPages}</p>
            <p className={styles.p}>Released: {book.released}</p>
            <p className={styles.p}>ISBN: {book.isbn}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Books;
