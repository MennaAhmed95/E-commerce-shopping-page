import classes from "./rate.module.css";

const Rate = ({ reviewsCount, rate }) => {
  const arr = [...Array(Math.round(rate))];
  const arr2 = [...Array(5 - Math.round(rate))];
  return (
    <div className={classes.flex}>
      <div className={classes["star-container"]}>
        {arr.map((itm, i) => (
          <img key={i} src="./images/star.svg" alt="s" />
        ))}
        {arr2.map((itm, i) => (
          <img key={i} src="./images/star2.svg" alt="s" />
        ))}
      </div>
      <div style={{ color: "gray" }}>({reviewsCount} review)</div>
    </div>
  );
};

export default Rate;
