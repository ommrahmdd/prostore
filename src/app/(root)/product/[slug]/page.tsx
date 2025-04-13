import { product } from "@/components/product/Product-card";
import ProductImages from "@/components/product/Product-images";
import ProductPrice from "@/components/product/Product-price";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import React from "react";

export default async function ProductDetails(props: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await props.params).slug;

  const parms = { slug: slug };
  const queryString = new URLSearchParams(parms).toString();

  const data = await fetch(
    `${process.env.NEXT_PUBLIC_HOST}/api/products?${queryString}`
  );

  const productDeatils: product = await data.json();

  return (
    <section>
      {/* ---------------- image and product details */}
      <div className="my-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5">
        <div className="col-span-2">
          <ProductImages images={productDeatils.images} />
        </div>

        <div className="col-span-2 py-4 flex flex-col gap-5">
          <p className="text-md">{productDeatils?.brand}</p>
          <h6 className="text-2xl font-semibold">{productDeatils?.name}</h6>
          <div className="flex">
            <ProductPrice
              price={productDeatils?.price}
              className="py-2 px-4 text-green-800 bg-green-100 inline-block rounded-xl"
            />
          </div>
          <div className="">
            <p className="font-semibold text-md">Description</p>
            <p className="">{productDeatils.description}</p>
          </div>
        </div>

        {/* Price and stock */}
        <Card className="self-start">
          <CardContent className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <p>Price</p>
              <p>{productDeatils.price}</p>
            </div>
            <div className="flex items-center justify-between">
              <p>Status</p>
              <Badge
                variant={!!productDeatils?.stock ? "default" : "destructive"}
              >
                {!!productDeatils?.stock ? "In Stock" : "Out of Stock"}
              </Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
