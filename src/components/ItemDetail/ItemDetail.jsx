import React, { useEffect, useState } from "react";
import { useCart } from "../../context/CartContext";
import { ButtonCount } from "../ButtonCount/ButtonCount";
import './ItemDetail.css';
import { useNotification } from "../../notification/NotificationContext";
import { Link } from "react-router-dom";



const ItemDetail = ({ id, title, categoryName, images, price, stock, description }) => {
    const [quantity, setQuantity] = useState(1); // Estado local para la cantidad seleccionada
    const { addItem, isInCart } = useCart();
    const { setNotification } = useNotification();

    const handleOnAdd = () => {
        const productToAdd = {
            id,
            title,
            price,
            images,
            quantity,
            stock,
        };

        addItem(productToAdd);
        setNotification('error', `Se agregaron ${quantity} ${title}`);
    };

    const handleQuantityChange = (newQuantity) => {
        setQuantity(newQuantity);
    };

    return (
        <article className="main-item-detail">
            <div>
                <picture>
                    <img src={images} alt={title} />
                </picture>
            </div>
            <div>
            {isInCart(id) ? (
                    <><button>
                      <Link className='go-to-chekout' to="/cart">IR A CARRITO</Link>
                    </button>
                    </>
                ) : ('')}
                <section className="detail-content-item">
                    <h2>{title}</h2>
                    <p>Categoria: {categoryName}</p>
                    <p>Descripción: {description}</p>
                    <p>Precio: {price}</p>
                    <p>Stcok: {stock}</p>
                </section>
                <ButtonCount stock={stock} quantity={quantity} onAdd={handleOnAdd} onUpdate={handleQuantityChange} />
            </div>
        </article>
    );
};

export default ItemDetail;