"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useForm } from 'react-hook-form'
import { createProduct, updateProduct } from "../products.api"
import { useParams, useRouter } from "next/navigation"

export function ProductForm({ product }: any) {
    const { register, handleSubmit } = useForm({
        defaultValues: {
            name: product?.name,
            description: product?.description,
            price: product?.price,
            image: product?.image
        }
    });
    const router = useRouter();
    const params = useParams<{ id: string }>();
    console.log(params)
    const onSubmit = handleSubmit(async data => {
        if (params?.id) {
            const res = await updateProduct(params.id, {
                ...data,
                price: parseFloat
            })
            console.log(res)
        }
        await createProduct({
            ...data,
            price: parseFloat(data.price)
        });
        router.push('/')
        router.refresh()
    })

    return (
        <form onSubmit={onSubmit}>
            <label>Products New Page</label>
            <Input {...register('name')} />
            <label>Description</label>
            <Input  {...register('description')} />
            <label>Price</label>
            <Input {...register('price')} />
            <label>Image</label>
            <Input  {...register('image')} />
            <Button className="my-4 w-full">{params.id ? 'Update Product' : 'Create Product'}</Button>
        </form>
    )
}