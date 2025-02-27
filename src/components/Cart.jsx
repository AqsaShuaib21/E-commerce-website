import { Link } from "react-router-dom";
import styles from "./Cart.module.css";
const Cart = ({ cart, setCart }) => {
  return (
    <>
      <div className={`container my-5  ${styles.boxStyle}`}>
        {cart.length === 0 ? (
          <div className="text-center ">
            <h1>Your Cart Is Empty</h1>
            <Link to={"/"} className="btn btn-warning ">
              Continue Shopping...
            </Link>
          </div>
        ) : (
          cart.map((product) => {
            return (
              <>
                <div className="card mb-3" style={{ maxWidth: "540px" }}>
                  <div className="row g-0">
                    <div className="col-md-4">
                      <img
                        src={product.imgsrc}
                        className="img-fluid rounded-start"
                        alt="..."
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body text-center">
                        <h5 className="card-title">{product.title}</h5>
                        <p className="card-text">{product.description}</p>
                        <button className="btn btn-primary mx-3">
                          ₹ {product.price}
                        </button>
                        <button className="btn btn-warning">Buy Now </button>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })
        )}
      </div>
      {cart.length != 0 && (
        <div className={`container ${styles.btnStyle}`}>
          <Link to={"/checkout"} className="btn btn-warning mx-5">
            Checkout
          </Link>
          <button onClick={() => setCart("")} className="btn btn-danger">
            Clear Cart
          </button>
        </div>
      )}
    </>
  );
};
export default Cart;
