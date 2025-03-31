import React from "react";
import ProductCard from "./ProductCard";
import { useSelector } from "react-redux";

export default function ProductList() {
  const { products } = useSelector((state) => state.product);
  console.log("productList", products); // Fixed typo 

  if (!products || products.length === 0) {
    return <p className="text-center mt-5">No products found.</p>;
  }

  return (
    <div className="mb-5 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-5 mx-3 rounded-md">
      {products.map((product) => (
        <ProductCard key={product._id} {...product}  />
      ))}
    </div>
  );
}
