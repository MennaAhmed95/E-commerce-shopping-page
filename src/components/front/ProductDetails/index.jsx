import classes from "./details.module.css";
import Modal from "./../../UI/Modal/index";
import ImageSlider from "../../ImageSlider";
import formatCurrency from "../../../utils/formatCurrency";
import Rate from "../../Rate";

const ProductDetails = ({ item, isOpen, setIsOpen }) => {
  return (
    <Modal open={isOpen} onClose={() => setIsOpen(false)}>
      <div>
        <ImageSlider className="big-img" slides={item?.photos} />
        <div>
          <div>
            <div className={classes.flx}>
              <h2>{item.name}</h2>
              <span> {formatCurrency(+item?.price)}</span>
            </div>
            <Rate reviewsCount={item.reviewsCount} rate={item.rate} />
          </div>
          <h3 className={classes.desc}>DESCRIPTION</h3>
          <p>{item.description}</p>
        </div>
      </div>
    </Modal>
  );
};

export default ProductDetails;
