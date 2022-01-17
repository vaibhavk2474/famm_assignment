import { useState } from "react";
import HomePage from "./container/HomePage/HomePage";
import { Route, Routes } from "react-router-dom";
import Context from "./Context/Context";
import OurProductsPage from "./components/OurProductsPage/OurProductsPage";
import TestimonialPage from "./container/TestimonialPage/TestimonialPage";
import BlogPage from "./container/BlogPage/BlogPage";
import ContactPage from "./container/ContactPage/ContactPage";
import AboutPage from "./container/AboutPage/AboutPage";
import CartSectionPage from "./container/CartSectionPage/CartSectionPage";
import "./App.module.css";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [totalCountItems, setTotalCountItems] = useState(0);

  //add to cart
  const addToCartHandler = (item) => {
    if (cartItems.length === 0) {
      let obj = {
        ...item,
        count: 1,
      };

      let updateCart = [...cartItems, obj];
      setCartItems(updateCart);
      let count = updateCart.length;
      setTotalCountItems(count);
      return;
    }

    let filteredArr = cartItems.filter((currentItem) => {
      return currentItem.id === item.id;
    });
    let updatedArr = cartItems.filter((currentItem) => {
      return currentItem.id !== item.id;
    });
    if (filteredArr.length === 0) {
      let obj = {
        ...item,
        count: 1,
      };

      let updateCart = [...cartItems, obj];
      setCartItems(updateCart);
      let count = updateCart.length;
      setTotalCountItems(count);

      return;
    }

    // 01
    let obj = {
      ...filteredArr[filteredArr.length - 1],
    };

    obj.count++;

    let updateCart = [...updatedArr, obj].sort((a, b) => {
      return a.id - b.id;
    });

    setCartItems(updateCart);
    let count = updateCart.length;
    setTotalCountItems(count);
  };

  //remove from cart
  const removeItem = (id) => {
    let filterArr = cartItems.filter((item) => {
      return item.id !== id;
    });

    setCartItems(filterArr);

    let count = filterArr.length;
    setTotalCountItems(count);
  };
// incease and decrement cart item count  
  const countIncrement = (id) => {
    let index = cartItems.findIndex((item) => {
      return item.id === id;
    });

    let updatedArr = [...cartItems];
    updatedArr[index].count++;

    setCartItems(updatedArr);
  };

  const countDecrement = (id) => {
    let index = cartItems.findIndex((item) => {
      return item.id === id;
    });

    let updatedArr = [...cartItems];
    updatedArr[index].count--;

    setCartItems(updatedArr);
    if (updatedArr[index].count === 0) {
      removeItem(id);
    }
  };

  return (
    <>
      <Context.Provider
        value={{
          cartItems: cartItems,
          addToCartHandler: addToCartHandler,
          removeItem: removeItem,
          countIncrement: countIncrement,
          countDecrement: countDecrement,
          totalCountItems: totalCountItems,
        }}
      >

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartSectionPage />} />
          <Route path="/products" element={<OurProductsPage />} />
          <Route path="/testimonial" element={<TestimonialPage />} />
          <Route path="/Blog" element={<BlogPage />} />
          <Route path="/Contact" element={<ContactPage />} />
          <Route path="/About" element={<AboutPage />} />
        </Routes>
      </Context.Provider>

    </>
  );
}

export default App;
