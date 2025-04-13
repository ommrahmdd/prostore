import ProductList from "@/components/product/Product-list";

export default function Home() {
  return (
    <div>
      <ProductList title="Newest products" limit={4} />
    </div>
  );
}
