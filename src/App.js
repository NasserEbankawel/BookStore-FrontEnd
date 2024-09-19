import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import Header from "./components/Header";
import Home from "./components/Home";
import Icons from "./components/Icons";
import FeaturedSection from "./components/FeaturedSection";
import NewsLetter from "./components/NewsLetter";
import Arrivals from "./components/Arrivals";
import Deals from "./components/Deals";
import Review from "./components/Reviews";
import Blogs from "./components/Blogs";
import Footer from "./components/Footer";
import Genre from "./components/Genre";
import AddToCart from "./components/AddToCart";
import { CartProvider } from "./components/CartContext ";

function App() {
  const [booksData, setBooksData] = useState([]);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState(""); // Add searchQuery state
  

  const getBooks = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/books");
      setBooksData(response.data); // Directly use response.data
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <div className="App">
      {/* Pass searchQuery and setSearchQuery to Header */}
 
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <Icons />
              <FeaturedSection />
              <NewsLetter />
              <Arrivals />
              <Deals />
              <Review />
              <Blogs />
              <Footer />
            </>
          }
        />
        <Route path="/FeaturedSection" element={<FeaturedSection />} />
        
        {/* Pass booksData and searchQuery to Genre */}
        <Route path="/Genre" element={<Genre booksData={booksData} searchQuery={searchQuery} />} />
        <Route path="/AddToCart" element={<AddToCart />} />
      </Routes>
   
    </div>
  );
}

export default App;
