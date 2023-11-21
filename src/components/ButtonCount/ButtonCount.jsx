import React, { useEffect, useState } from "react";

export const ButtonCount = ({ onAdd, onUpdate, stock, initial = 1 }) => {
    const [count, setCount] = useState(initial);

    useEffect(() => {
        if (typeof onUpdate === 'function') {
            onUpdate(count);
        }
    }, [count, onUpdate]);
    const increment = () => {
        if (count < stock) {
            setCount(prevCount => prevCount + 1);
        }
    };
    
    const decrement = () => {
        if (count !== 0) {
            setCount(prevCount => prevCount - 1);
        }
    };
    return (
        <div className="add-to-cart">
            <button onClick={decrement}>-</button>
            <p>{count}</p>
            <button onClick={increment}>+</button>
            <button className="button-add-cart" onClick={() => onAdd(count)}>
                Agregar al carrito
            </button>
        </div>
    );
};