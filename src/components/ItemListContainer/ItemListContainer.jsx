import React from "react";
import useAsync from "../../hooks/useAsync";
import {GetProduct, GetProductByCategory} from "../../../asyncMock";
import ItemList from "../ItemList/ItemList";
import Loading from "../Loading/Loading";
import { useParams } from 'react-router-dom'
import './ItemListContainer.css'

const ItemListContainer = () => {
    const {categoryId} = useParams()
    console.log(categoryId);
    console.log(GetProductByCategory())
    const asyncFunction = () =>  categoryId ? GetProductByCategory(categoryId) : GetProduct();
    console.log(asyncFunction());
    const {data: products, loading, error} = useAsync(asyncFunction, [categoryId])



    if(loading) {
        return (
            <Loading />
        )
    }
    if(error) {
        return <h1>Error al mostrar los productos</h1>
    }
    return (
        <>
                <ItemList  className='ListContainer' products={products}/>
        </>
    )
}
export default ItemListContainer