import classes from "./pagination.module.css";

const Pagination = (props) => {
  let { pageSize, count, currentPage, setCurrentPage } = props;
  const noOfPages = Math.ceil(count / pageSize);
  let Pages = [...Array(noOfPages).keys()].map((itm) => itm + 1);

  const increment = () => {
    if (currentPage < noOfPages) setCurrentPage(currentPage + 1);
    else setCurrentPage(currentPage);
  };
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  const decrement = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
    else setCurrentPage(currentPage);
  };
  return (
    <div className={classes.pagination}>
      <div className={classes.number} onClick={decrement}>
        <i className="fa fa-chevron-circle-left"></i>
      </div>
      {Pages.map((page) => (
        <div
          key={page}
          className={
            currentPage === page
              ? classes.number + " " + classes.active
              : classes.number
          }
          onClick={() => handlePageChange(page)}
        >
          {page}
        </div>
      ))}

      <div className={classes.number} onClick={increment}>
        <i className="fa fa-chevron-circle-right"></i>
      </div>
    </div>
  );
};

export default Pagination;
