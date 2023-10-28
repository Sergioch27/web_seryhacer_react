import useCount from "../../hooks/useCount";
import React from "react";

const ItemCount = ()=>{
    const { count, decrement, increment } = useCount(1)
     return (
        <>
            <h2>{count}</h2>
            <button onClick={decrement}>-</button>
            <button onClick={increment}>+</button>
        </>
     )
}
export default ItemCount