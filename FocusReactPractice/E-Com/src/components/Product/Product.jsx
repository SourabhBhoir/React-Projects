import React from 'react';
import styles from './product.module.css';

function Product({ addToCart }) {
  const products = [
    { id: 1, name: "Product 1", description: "Lorem ipsum dolor sit amet.", price: 100 },
    { id: 2, name: "Product 2", description: "Consectetur adipisicing elit.", price: 200 },
    { id: 3, name: "Product 3", description: "Sed do eiusmod tempor incididunt.", price: 300 },
    { id: 4, name: "Product 4", description: "Ut labore et dolore magna aliqua.", price: 400 },
    { id: 5, name: "Product 5", description: "Ut enim ad minim veniam.", price: 500 },
    { id: 6, name: "Product 6", description: "Quis nostrud exercitation ullamco.", price: 600 },
    { id: 7, name: "Product 7", description: "Laboris nisi ut aliquip ex ea commodo.", price: 700 },
    { id: 8, name: "Product 8", description: "Duis aute irure dolor in reprehenderit.", price: 800 }
  ]; // Array with 8 products

  return (
    <div className={styles.cards}>
      {products.map(product => (
        <div key={product.id} className={styles.card}>
          <div className={styles.img}></div>
          <p className={styles.words}>{product.description}</p>
          <div>{product.price}</div>
          <button onClick={() => addToCart(product)}>Add to Cart</button> {/* Pass product to addToCart */}
        </div>
      ))}
    </div>
  );
}

export default Product;
