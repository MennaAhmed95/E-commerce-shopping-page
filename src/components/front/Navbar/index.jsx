import { Link } from "react-router-dom";
import classes from "./nav.module.css";

const Navbar = ({ len }) => {
  return (
    <nav className={classes.navbar}>
      <div className={`container ${classes.content}`}>
        <div>
          <Link to="/">
            <img
              src="https://www.xramile.com/images/logo/logo.png"
              alt="logo"
              width="45px"
              hight="45px"
            />
          </Link>
        </div>
        <ul>
          <li>
            <Link to="/cartPage">
              <i
                className="fas fa-shopping-cart"
                style={{ color: "white", marginRight: "-0.5rem" }}
              ></i>
              <span className={classes.badge}>{len}</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
