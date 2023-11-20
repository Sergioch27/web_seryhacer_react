import { useEffect, useState } from "react"
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { getProductById } from "../../service/firebase/firestore/products"
import React from "react"

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)

    const { ItemId } = useParams()

    useEffect(() => {
        setLoading(true)
        getProductById(ItemId)
            .then(response => {
                setProduct(response)
            })
            .catch(error => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })

    }, [ItemId])

    if(loading) {
        return <h1>Cargando Producto</h1>
    }

    if(!product) {
        return <h1>El producto no existe</h1>
    }

    return (
        <main >
            <h1>Detalle del producto</h1>
            <ItemDetail {...product}/>
        </main>
    )
}

export default ItemDetailContainer