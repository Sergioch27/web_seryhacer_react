import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import React from "react";
import { ButtonCount } from "../ButtonCount/ButtonCount"; // Ajusta la ruta según tu estructura de archivos
import './cart.css';

const Cart = () => {
    const { cart, total, addItem, removeItem } = useCart();

    const handleOnAdd = (product, newQuantity) => {
        addItem(product, newQuantity);
    };
    
    const handleRemoveItem = (id) => {
        removeItem(id);
    };
    console.log(cart);

    return (
        <div className="cart-content-page">
            <h1>Carrito</h1>
            <div className="cart-container">
                <div className="cart-products-container">
                    {cart.map((prod) => (
                        <div key={prod.id} className="product-container">
                            <img src={prod.images} alt={prod.title} />
                            <div className="data-product">
                            <h3>{prod.title}</h3>
                            <span>Precio:{prod.price}</span>
                            <span>Cantidad: {prod.quantity}</span>
                            </div>
                            <div className="button-zone">
                            <ButtonCount stock={prod.stock} onAdd={(newQuantity) => handleOnAdd(prod,newQuantity)} />
                            <button className="delete-to-cart" onClick={() => handleRemoveItem(prod.id)}>Eliminar</button>                        </div>
                            </div>
                    ))}
                </div>
                <div className="cart-total-container">
                    <h5>Resumen de Compra</h5>
                    <div className="Subtotal">
                        <p>Subtotal(Item={cart.length})</p>
                        <span>{total}</span>
                    </div>
                    <div className="Total">
                        <p>Total</p>
                        <span>{total}</span>
                    </div>
                    <div className="content-go-pay">
                        <button>
                        <Link className='go-pay' to='/checkout'>FINALIZAR COMPRA</Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;