import { useParams } from "react-router-dom";
import { items } from "./CartContext";
import { useEffect, useState } from "react";
import Product from "./ProductPage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const ProductDetail = ({ cart, setCart }) => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [relatedProducts, setRelatedProducts] = useState([]);
  useEffect(() => {
    const filterProduct = items.filter((product) => product.id == id);
    setProduct(filterProduct[0]);
    const relatedProducts = items.filter(
      (prod) => prod.category === product.category
    );
    setRelatedProducts(relatedProducts);
  }, [id, product.category]);
  const addToCart = (id, price, title, description, imgsrc) => {
    const obj = { id, price, title, description, imgsrc };
    setCart([...cart, obj]);
    console.log(cart);
    toast.success("item added on cart", {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div className="container styleContainer">
        <div className="img">
          <img src={product.imgsrc} alt="" />
        </div>
        <div className="text-center">
          <h1 className="card-title">{product.title}</h1>
          <p className="card-text">{product.description}</p>
          <button className="btn btn-primary mx-3">₹ {product.price}</button>
          <button
            onClick={() =>
              addToCart(
                product.id,
                product.price,
                product.title,
                product.description,
                product.imgsrc
              )
            }
            className="btn btn-warning"
          >
            Add To Cart
          </button>
        </div>
      </div>
      <h2 className="text-center">
        <u>Related Products</u>
      </h2>
      <Product cart={cart} setCart={setCart} items={relatedProducts} />
    </>
  );
};
export default ProductDetail;
