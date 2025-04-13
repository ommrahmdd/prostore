import { getProductDetails, getProducts } from "@/data/actions/product.actions";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);

    const limit = searchParams.get("limit") as string;
    const slug = searchParams.get("slug") as string;

    console.log("ddddddddddddddddddddddddddddd", slug);
    if (slug) {
      const product = await getProductDetails(slug);

      return NextResponse.json(product);
    }

    const products = await getProducts(limit);
    return NextResponse.json(products);
  } catch (e) {
    console.log("eeeeeee", e);
  }
}
