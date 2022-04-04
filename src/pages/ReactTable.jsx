import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";
import { ProductTable } from "../components/ProductTable/ProductTable";

const ReactTable = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const { data } = await axios("https://basir.github.io/products.json");
        setProducts(data);
        setLoading(false);
      } catch (err) {
        setProducts([]);
        setLoading(false);
      }
    };
    fetchProducts(); 
  }, []);

  const columns = useMemo(
    () => [
      { Header: "Category", accessor: "category" },
      { Header: "Id", accessor: "id" },
      { Header: "Name", accessor: "name" },
      {
        Header: "Price",
        accessor: "price",
        aggregate: "average",
        Aggregated: ({ value }) => `${Math.round(value * 100) / 100}(avg)`,
      },
      {
        Header: "Count In Stock",
        accessor: "countInStock",
        aggregate: "sum",
        Aggregated: ({ value }) => `${value}(sum)`,
      },
      { Header: "Brand", accessor: "brand" },
      {
        Header: "Rating",
        accessor: "rating",
        aggregate: "average",
        Aggregated: ({ value }) => `${Math.round(value * 100) / 100}(avg)`,
      },
      { Header: "Description", accessor: "description" },
    ],
    []
  );

  return (
    <div className="react-table-container">
      {loading ? (
        <span>Loading Products...</span>
      ) : (
        <ProductTable columns={columns} data={products} />
      )}
    </div>
  );
};

export default ReactTable;
