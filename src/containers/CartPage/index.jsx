import clas from "./cartpage.module.css";
import { useState } from "react";
import classes from "../../components/front/CartItem/cart.module.css";
import CartItem from "../../components/front/CartItem";

const CartPage = ({ cartItems }) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className={`${clas.cart} container`}>
      {cartItems.length > 0 ? (
        <>
          <div className={classes.row}>
            <div className={classes["col-9"]}>
              <div className={classes.heading}>
                <div className={classes.row}>
                  <div className={classes["col-2"]}>Picture</div>
                  <div className={classes["col-2"]}>Name</div>
                  <div className={classes["col-2"]}>Price</div>
                  <div className={classes["col-2"]}>Quantity</div>
                  <div className={classes["col-2"]}>Total Price</div>
                </div>
              </div>
              {cartItems.map((product, i) => (
                <CartItem
                  product={product}
                  quantity={quantity}
                  key={product.id}
                />
              ))}
            </div>
          </div>
        </>
      ) : (
        <h2 style={{ textAlign: "center" }}>No items added</h2>
      )}
    </div>
  );
};

export default CartPage;
