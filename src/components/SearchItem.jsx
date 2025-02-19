import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { items } from "./CartContext";
import Product from "./ProductPage";

const SearchItem = () => {
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
  return <Product items={filterData} />;
};
export default SearchItem;
