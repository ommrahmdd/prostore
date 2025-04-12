import { getProducts } from "@/data/actions/product.actions";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);

    const limit = searchParams.get("limit") as string;

    const products = await getProducts(limit);
    return NextResponse.json(products);
  } catch (e) {
    console.log("eeeeeee", e);
  }
}
