import { useState } from "react";
import Pagination from "../../components/front/Pagination";
import ProductCard from "../../components/front/ProductItem";
import classes from "./gallery.module.css";

const GalleryPage = ({ products, handleAddtoCard }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 8;
  const startIndex = (currentPage - 1) * pageSize;
  let prods = products.slice(startIndex, startIndex + pageSize);

  return (
    <>
      <div className={`container ${classes.row}`}>
        {prods?.map((itm, i) => (
          <ProductCard item={itm} key={i} handleAddtoCard={handleAddtoCard} />
        ))}
      </div>
      <div className={classes.pag}>
        <Pagination
          pageSize={pageSize}
          count={products?.length}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </>
  );
};

export default GalleryPage;
