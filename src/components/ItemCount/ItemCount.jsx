import useCount from "../../hooks/useCount";
import React from "react";

const ItemCount = ({ onAdd})=>{

    const { count, decrement, increment } = useCount()
     return (
        <>
            <h2>{count}</h2>
            <button onClick={decrement}>-</button>
            <button onClick={() => onAdd(count)}>Agregar al carrito</button>
            <button onClick={increment}>+</button>
        </>
     )
}
export default ItemCount