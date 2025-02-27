import { useState } from "react";
import styles from "./Navbar.module.css";
import { Link, useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
const Navbar = ({ cart }) => {
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${searchText}`);
    setSearchText(" ");
  };
  return (
    <>
      <header className="p-3 text-bg-dark sticky-top">
        <div className={`container ${styles.navbarContent}`}>
          <Link to={"/"} className={styles.home}>
            {" "}
            Home
          </Link>
          <form className={styles.searchBar} onSubmit={handleSubmit}>
            <input
              type="text"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              placeholder="Search product"
            />
          </form>
          <Link to={"/cart"} className={styles.cart}>
            <button
              type="button"
              className="btn btn-primary position-relative "
            >
              <FaShoppingCart style={{ fontSize: "1.5rem" }} />
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {cart.length}
                <span className="visually-hidden">unread messages</span>
              </span>
            </button>
          </Link>
        </div>
      </header>
    </>
  );
};
export default Navbar;
