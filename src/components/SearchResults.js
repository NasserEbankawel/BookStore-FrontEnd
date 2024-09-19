// SearchResults.js
import React from "react";

const SearchResults = ({ booksData, searchQuery }) => {
  // Filter books based on the search query
  const filteredBooks = booksData.filter((book) =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="search-results">
      <h1>Search Results for "{searchQuery}"</h1>
      <div className="book-list">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <div key={book.book_id} className="book-item">
              <h3>{book.title}</h3>
              <p>{book.genre}</p>
              <p>{book.price}</p>
            </div>
          ))
        ) : (
          <p>No books found matching your search.</p>
        )}
      </div>
    </div>
  );
};

export default SearchResults;
