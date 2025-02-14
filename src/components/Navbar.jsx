import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <header className="p-3 text-bg-dark">
        <div className={`container ${styles.navbarContent}`}>
          <Link to={"/"} className={styles.home}>
            {" "}
            Home
          </Link>
          <div className={styles.searchBar}>
            <input type="text" placeholder="Search product" />
          </div>
          <Link to={"/cart"} className={styles.cart}>
            CART
          </Link>
        </div>
      </header>
    </>
  );
};
export default Navbar;
