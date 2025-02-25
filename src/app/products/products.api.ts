export const BACKEND_URL = process.env.BACKEND_URL || 'http://localhost:4000/api'

export async function getProducts() {
    const data = await fetch(`${BACKEND_URL}/products`, {
        cache: "no-store"
    })
    return await data.json()
}
export async function getProduct(id: string) {
    const data = await fetch(`${BACKEND_URL}/products`, {
        cache: 'no-store'
    })
    return await data.json();
}
export async function createProduct(productData: any) {
    const res = await fetch(`${BACKEND_URL}/products`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(productData),
    })
    const data = await res.json();
    return data
}

//delete product
export async function deleteProduct(id: string) {
    const res = await fetch(`${BACKEND_URL}/products/${id}`, {
        method: 'DELETE'
    })
    return await res.json();
}
//update product
export async function updateProduct(id: string, newProduct: any) {
    const res = await fetch(`${BACKEND_URL}/products/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newProduct),
        cache: 'no-store'
    })
    return await res.json();
}
