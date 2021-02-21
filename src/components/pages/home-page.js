import React from 'react';
import { Link } from 'react-router-dom';
import BookList from '../book-list';

const HomePage = () => {
  return (
    <div>
      <h2>HomePage</h2>
      <BookList />
      <Link to="/cart">Cart</Link>
    </div>
  );
};

export default HomePage;
