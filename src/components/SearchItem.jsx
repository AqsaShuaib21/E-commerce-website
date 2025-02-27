import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { items } from "./CartContext";
import Product from "./ProductPage";

const SearchItem = ({ cart, setCart }) => {
  const { term } = useParams();
  const [filterData, setFilterData] = useState([]);
  useEffect(() => {
    const filteredData = () => {
      const data = items.filter((p) =>
        p.title.toLowerCase().includes(term.toLowerCase())
      );
      setFilterData(data);
    };
    filteredData();
  }, [term]);
  return <Product cart={cart} setCart={setCart} items={filterData} />;
};
export default SearchItem;
