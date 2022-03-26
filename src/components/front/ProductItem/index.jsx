import classes from "./product.module.css";
import formatCurrency from "./../../../utils/formatCurrency";
import ProductDetails from "../ProductDetails";
import { useState } from "react";

const ProductCard = ({ item, handleAddtoCard }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className={classes.col}>
        <div className={classes.product}>
          <div style={{ cursor: "pointer" }} onClick={() => setIsOpen(true)}>
            <img
              src={item?.featuredPhoto}
              alt="Product"
              className={classes.productImg}
            />
          </div>
          <div>
            <div className={classes["title-product"]}>
              <h3>{item?.name}</h3>
            </div>
            <div className={classes["card-footer"]}>
              <div>
                <span className={classes.price}>
                  {formatCurrency(+item?.price)}
                </span>
              </div>
              <div>
                <a
                  href="#"
                  className={classes["buy-btn"]}
                  onClick={() => handleAddtoCard(item)}
                >
                  <i className="fa fa-shopping-basket"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ProductDetails item={item} isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default ProductCard;
