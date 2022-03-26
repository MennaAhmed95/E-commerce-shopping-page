import { Routes as Switch, Route } from "react-router-dom";
import CartPage from "../containers/CartPage";
import GalleryPage from "../containers/GalleryPage";

const Routes = ({ products, cartItems, handleAddtoCard }) => {
  return (
    <Switch>
      <Route
        path="/"
        exact
        element={
          <GalleryPage products={products} handleAddtoCard={handleAddtoCard} />
        }
      />
      <Route
        path="/cartPage"
        exact
        element={<CartPage cartItems={cartItems} />}
      />
    </Switch>
  );
};

export default Routes;
