import Image from "next/image";
import Link from "next/link";
import React from "react";
import ProductPrice from "./Product-price";

type productCardProps = {
  product: {
    name: string;
    brand: string;
    description: string;
    price: number;
    images: string[];
    stock: number;
  };
};

export default function ProductCard({ product }: productCardProps) {
  return (
    <Link
      href={"/"}
      className="flex flex-col border p-4 rounded shadow-sm transition-all ease-in-out duration-200 hover:translate-y-1 hover:shadow-lg"
    >
      <Image
        src={product.images[0]}
        alt={product.name}
        className="mb-2"
        height={300}
        width={400}
        priority={true}
      />
      <div className="flex flex-col flex-grow justify-between">
        <p className="mb-2 text-md font-light">{product.brand}</p>
        <h5 className="text-lg font-bold mb-2">{product.name}</h5>
        <p className="text-gray-700 mb-4">{product.description}</p>
        <div className="flex items-center justify-between">
          <div className="">3 Stars</div>
          {!!product.stock ? (
            <ProductPrice price={product.price} />
          ) : (
            <p className="text-md text-red-900">Out of stcok</p>
          )}
        </div>
      </div>
    </Link>
  );
}
