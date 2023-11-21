import { memo } from "react";
import useAsync from "../../hooks/useAsync";
import { GetProduct } from "../../service/firebase/firestore/products"; 
import ItemList from "../ItemList/ItemList";
import Loading from "../Loading/Loading";
import { useParams } from 'react-router-dom'
import './ItemListContainer.css'

const MemoizedItemList = memo(ItemList)


const  ItemListContainer =  () => {
    const {categoryId} =  useParams()
    console.log(categoryId);
    const asyncFunction = () =>  GetProduct(categoryId);
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
    if(products.length === 0) {
        return <h1>No existen productos para esta categoria</h1>
    }

    return (
        <>
                <MemoizedItemList products={products}/>
        </>
    )
}
export default ItemListContainer