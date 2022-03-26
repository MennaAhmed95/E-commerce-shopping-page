import formatCurrency from "../../../utils/formatCurrency";
import classes from "./cart.module.css";

const CartItem = ({ product, quantity }) => {
  return (
    <div className={`${classes.row} ${classes.verticalAlign}`}>
      <div className={classes["col-2"]}>
        <div className={classes.image}>
          <img src={product?.featuredPhoto} alt={product.name} />
        </div>
      </div>
      <div className={classes["col-2"]}>
        <div className={classes.name}>{product.name}</div>
      </div>
      <div className={classes["col-2"]}>
        <div className={classes.price}>{formatCurrency(+product?.price)}</div>
      </div>
      <div className={classes["col-2"]}>
        <input
          className={classes.quantity}
          type="number"
          value={product.quantity ? product.quantity : quantity}
          min="1"
          readOnly
          //   onChange={(e) => setQuantity(e.target.value)}
        />
      </div>
      <div className={classes["col-2"]}>
        <div className={classes.total}>
          {formatCurrency(
            product.quantity
              ? product.quantity * product?.price
              : quantity * product?.price
          )}
        </div>
      </div>
    </div>
  );
};

export default CartItem;
