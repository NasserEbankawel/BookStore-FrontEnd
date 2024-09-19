import React, { useState } from "react";
import Deals from "./Deals";
import Footer from "./Footer";

const Genre = ({ booksData, searchQuery }) => {
  const [selectedGenre, setSelectedGenre] = useState("All");

  // Filter books based on the selected genre and search query
  const filteredBooks = booksData.filter(book => {
    const matchesGenre = selectedGenre === "All" || book.genre === selectedGenre;
    const matchesSearch = book.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesGenre && matchesSearch;
  });

  return (
    <div className="genre-container">
      <section className="genre" id="genre">
        <h1 className="heading">
          <span>All Genre</span>
        </h1>

        {/* Dropdown or buttons to select genre */}
        <div>
          <select value={selectedGenre} onChange={(e) => setSelectedGenre(e.target.value)}>
            <option value="All">All</option>
            <option value="featured">featured</option>
            <option value="adventure">adventure</option>
            <option value="philosophy">philosophy</option>
            <option value="science fiction">science fiction</option>
            <option value="business">business</option>
          </select>
        </div>

        <div className="swiper genre-slider">
          <div className="swiper-wrapper">
            {filteredBooks.length > 0 ? (
              filteredBooks.map((book) => (
                <div className="swiper-slide box" key={book.book_id}>
                  <div className="icons">
                    <a href="#" className="fas fa-search"></a>
                    <a href="#" className="fas fa-heart"></a>
                    <a href="#" className="fas fa-eye"></a>
                  </div>

                  <div className="image">
                    <img src={book.imagelink} alt={book.title} />
                  </div>

                  <div className="content">
                    <h3>{book.title}</h3>
                    <div className="price">
                      ${book.price} <span>$20.99</span>
                    </div>
                    <a href="#" className="btn">Add to Cart</a>
                  </div>
                </div>
              ))
            ) : (
              <p>No books found matching your search.</p>
            )}
          </div>
        </div>
      </section>

      <Deals />
      <Footer />
    </div>
  );
};

export default Genre;

