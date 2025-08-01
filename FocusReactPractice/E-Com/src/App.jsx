import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Product from './components/Product/Product'
import Cart from './components/Cart/Cart'
import Footer from './components/Footer/Footer'
function App() {

  const [cart, setCart] = useState([]);// cart state

  // function to add item to cart
  const addToCart = (product) =>{
    setCart([...cart, product]); // Add new product to cart
  };

    // Function to remove items from the cart
    const removeFromCart = (productToRemove) => {
      setCart(cart.filter(product => product !== productToRemove)); // Filter out the product to be removed
    };

  return (
    <div>
      <Navbar/>
      <Product addToCart={addToCart} /> {/*pass add to cart function*/}

      <Cart cart={cart} removeFromCart={removeFromCart}/> {/*display cart*/}
      <Footer /> 
    </div>
  )
}

export default App