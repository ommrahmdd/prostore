import React from "react";

export default function ProductPrice({
  price,
  className,
}: {
  price: number;
  className?: string;
}) {
  const formattedPrice = price.toFixed(2);
  const [fixedPrice, floattedPrice] = formattedPrice.split(".");

  return (
    <p className={className}>
      <span className="align-super text-sm">$</span>
      <span className="text-lg">{fixedPrice}</span>
      <span className="align-super text-sm">{floattedPrice}</span>
    </p>
  );
}
