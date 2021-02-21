import React from 'react';
import './book-list-item.css';

const BookListItem = ({ book }) => {
  const { title, author, price, coverImage } = book;
  return (
    <div className="book-list-item">
      <div className="book-cover">
        <img src={coverImage} alt={title}></img>
      </div>
      <div className="book-details">
        <a href="/#" className="book-title">
          {title}
        </a>
        <div className="book-author">{author}</div>
        <div className="book-price">${price}</div>
        <button className="btn btn-info add-to-cart">Add to Cart</button>
      </div>
    </div>
  );
};

export default BookListItem;
