import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from './app/store';
import NavBar from "./components/NavBar";
import ItemCards from "./components/ItemCards";
import About from "./components/About";
import Cart from "./components/Cart";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemCards />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;