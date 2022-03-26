import "./App.css";
import data from "./components/back/Data/data";
import Navbar from "./components/front/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes/routes";
import { useState } from "react";

function App() {
  const { products } = data;
  const [cartItems, setCartItems] = useState([]);
  const handleAddtoCard = (product) => {
    const exist = cartItems.find((itm) => itm.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((itm) =>
          itm.id === product.id
            ? { ...exist, quantity: exist.quantity + 1 }
            : itm
        )
      );
    } else setCartItems([...cartItems, { ...product, quantity: 1 }]);
  };
  return (
    <Router>
      <Navbar len={cartItems.length} />
      <Routes
        products={products}
        cartItems={cartItems}
        handleAddtoCard={handleAddtoCard}
      />
    </Router>
  );
}

export default App;
