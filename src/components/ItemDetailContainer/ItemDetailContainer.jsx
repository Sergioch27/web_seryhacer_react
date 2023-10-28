import { useParams } from 'react-router-dom'
import { GetProductById } from "../../../asyncMock"
import useAsync from "../../hooks/useAsync"
import Loading from "../Loading/Loading"
import React from "react"
import ItemDetail from "../ItemDetail/ItemDetail"

const ItemDetailContainer = ()=>{
    const asyncFunction = () => GetProductById(ItemId);
    const {data: products, loading, error} = useAsync(asyncFunction, [])
    const { ItemId } = useParams()

    if(loading){
        return (
            <Loading />
        )
    }
    if(error){
        return <h1>Producto no encontrado</h1>
    }
    return (
        <ItemDetail  products={products} />
    )
}
export default ItemDetailContainer