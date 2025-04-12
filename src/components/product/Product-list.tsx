import React from "react";
import sampleData from "@/data/sample-data";
import ProductCard from "./Product-card";

export default function ProductList({
  title,
  limit,
}: {
  title: string;
  limit?: number;
}) {
  const limitedProducts = limit
    ? sampleData.products.slice(0, limit)
    : sampleData.products.slice(0, 4);

  return (
    <div className="py-5">
      <h4 className="mb-3 text-2xl font-bold">{title}</h4>
      {!sampleData.products.length && <div>No Products</div>}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {limitedProducts.map((product) => (
          <ProductCard product={product} key={product.name} />
        ))}
      </div>
    </div>
  );
}
