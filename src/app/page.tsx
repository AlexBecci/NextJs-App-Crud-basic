import { buttonVariants } from "@/components/ui/button"
import Link from "next/link"
import { getProducts } from "./products/products.api"
import { ProductCard } from "@/components/product-card";

async function HomePage() {
  const products = await getProducts();
  console.log(products)
  return (
    <>
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-bold">Next Nest App</h1>
        <Link className={buttonVariants()} href="/products/new">Create Product</Link>

      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3">
        {products.map((product: any) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </>
  )
}

export default HomePage