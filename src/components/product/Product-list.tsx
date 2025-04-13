import React from "react";
import ProductCard, { product } from "./Product-card";

export default async function ProductList({
  title,
  limit,
}: {
  title: string;
  limit?: number;
}) {
  let limitedProducts = [];
  try {
    const parms = { limit: String(limit) };
    const queryString = new URLSearchParams(parms).toString();
    const productsJson = await fetch(
      `${process.env.NEXT_PUBLIC_HOST}/api/products?${queryString}`,
      { method: "GET" }
    );
    const productsList = await productsJson.json();

    limitedProducts = limit
      ? productsList.slice(0, limit)
      : productsList.slice(0, 4);
  } catch (err) {
    console.log("dddddddd", err);
  }

  return (
    <div className="py-5">
      <h4 className="mb-3 text-2xl font-bold">{title}</h4>

      {!limitedProducts.length && <div>No Products</div>}

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {limitedProducts.map((product: product) => (
          <ProductCard product={product} key={product.name} />
        ))}
      </div>
    </div>
  );
}
