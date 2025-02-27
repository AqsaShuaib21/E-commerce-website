import { items } from "./CartContext";

const Sidebar = ({ setData }) => {
  const filterbyCategory = (category) => {
    const element = items.filter((product) => product.category === category);
    setData(element);
  };

  const filterbyPrice = (price) => {
    const element = items.filter((product) => product.price >= price);
    setData(element);
  };
  return (
    <>
      <div
        className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark"
        style={{ width: "180px", height: "100vh", position: "fixed" }}
      >
        <a
          href="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
        >
          <span className="fs-1">E-cart</span>
        </a>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto style">
          <li className="nav-item">
            <h2 href="#" className="nav-link active" aria-current="page">
              Filter by {":-"}
            </h2>
          </li>
          <li onClick={() => setData(items)}>
            <a href="#" className="nav-link text-white">
              no filter
            </a>
          </li>
          <li onClick={() => filterbyCategory("dresses")}>
            <a href="#" className="nav-link text-white">
              dresses
            </a>
          </li>
          <li onClick={() => filterbyCategory("laptop")}>
            <a href="#" className="nav-link text-white">
              laptops
            </a>
          </li>
          <li onClick={() => filterbyCategory("House-essential")}>
            <a href="#" className="nav-link text-white">
              House-Essentials
            </a>
          </li>
          <li onClick={() => filterbyPrice(2000)}>
            <a href="#" className="nav-link text-white">
              {">="}2,000
            </a>
          </li>
          <li onClick={() => filterbyPrice(5000)}>
            <a href="#" className="nav-link text-white">
              {">="}5,000
            </a>
          </li>
          <li onClick={() => filterbyPrice(10000)}>
            <a href="#" className="nav-link text-white">
              {">="}10,000
            </a>
          </li>
          <li onClick={() => filterbyPrice(20000)}>
            <a href="#" className="nav-link text-white">
              {">="}20,000
            </a>
          </li>
          <li onClick={() => filterbyPrice(30000)}>
            <a href="#" className="nav-link text-white">
              {">="}30,000
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};
export default Sidebar;
