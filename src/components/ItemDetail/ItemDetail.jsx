import { useState } from "react"
import { useCart } from "../../context/CartContext"
import { useNotification } from "../../notification/NotificationContext"
import { Link } from "react-router-dom"
import ItemCount from "../ItemCount/ItemCount"
import './ItemDetail.css'
import React from "react"
import CustomWeekView from "../CalendarGrid/CalendarGrid"

const InputCount = ({ onAdd, stock, initial= 1 }) => {
    const [count, setCount] = useState(initial)

    const handleChange = (e) => {
        if(e.target.value <= stock) {
            setCount(e.target.value)
        }
    }

    return (
        <div>
            <input type='number' onChange={handleChange} value={count}/>
            <button onClick={() => onAdd(count)}>Agregar al carrito</button>
        </div>
    )
}

const ButtonCount = ({ onAdd, stock, initial = 0 }) => {
    const [count, setCount] = useState(initial)

    const increment = () => {
        if(count < stock) {
            setCount(count + 1)
        }

    }

    const decrement = () => {
      if(count != 0)
            setCount(count - 1)
    }

    return (
        <div className="add-to-cart">
            <button onClick={decrement}>-</button>
            <p>{count}</p>
            <button onClick={increment}>+</button>
            <button onClick={() => onAdd(count)}>Agregar al carrito</button>
        </div>
    )
}

const ItemDetail = ({ id, title, categoryName, images, price, stock, description }) => {
    const [inputType, setInputType] = useState('button')

    const ItemCount = inputType === 'button' ? ButtonCount : InputCount

    const { addItem, isInCart } = useCart()
    // const { setNotification } = useNotification()

    const handleOnAdd = (quantity) => {
        const productToAdd = {
            id, title, price,
        }

        addItem(productToAdd)
        setNotification('error', `Se agregaron ${quantity} ${name}`)
    }

    return (
        <article className="main-item-detail">
          <div>
          <picture>
                <img src={images} alt={title} />
            </picture>
          </div>
          <div>
             <section className="detail-content-item">
             <h2>
               {title}
             </h2>
                <p>
                    Categoria: {categoryName}
                </p>
                <p>
                    Descripción: {description}
                </p>
                <p>
                    Precio: {price}
                </p>
            </section>
            <ItemCount stock={stock} onAdd={handleOnAdd}/>
          </div>
          <div>
          <CustomWeekView localizer={localizer} />
        </div>
            {/* <footer>
                {
                    isInCart(id) ? (
                        <Link to='/cart'>Finalizar Compra</Link>
                    ) : (
                    )
                }
            </footer> */}
        </article>
    )
}

export default ItemDetail