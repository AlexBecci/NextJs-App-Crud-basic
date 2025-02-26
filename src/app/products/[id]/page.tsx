import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getProduct } from "../products.api"
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

interface Props {
    params: {
        id: string
    }
}

async function ProductDetailsPage({ params }: Props) {
    const product = await getProduct(params.id);
    return (
        <div className="flex justify-center items-center h-screen">
            <Card>
                <CardHeader>
                    <CardTitle className="flex justify-between">
                        Product Details: {product.id}
                        <Link href={'/'} className={buttonVariants()}>Go Back</Link>
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <h1>{product.name}</h1>
                    <p>{product.description}</p>
                    <p>{product.price}</p>
                    <img src={product.image} alt="image" className="w-full h-64 object-cover" />
                </CardContent>
            </Card>
        </div>
    )
}
export default ProductDetailsPage