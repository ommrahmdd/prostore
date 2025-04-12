import React from "react";

export default function ProductPrice({ price }: { price: number }) {
  const formattedPrice = price.toFixed(2);
  const [fixedPrice, floattedPrice] = formattedPrice.split(".");

  return (
    <p className="">
      <span className="align-super text-sm">$</span>
      <span className="text-lg">{fixedPrice}</span>
      <span className="align-super text-sm">{floattedPrice}</span>
    </p>
  );
}
