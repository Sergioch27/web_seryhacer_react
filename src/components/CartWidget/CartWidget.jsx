import React from 'react';
import IconFont from '../IconFont/IconFont';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import './CartWidget.css';
import { useCart } from '../../context/CartContext';
import { NavLink} from 'react-router-dom'

const CartWidget = (props) => {
    const { cart } = useCart();
    const { totalQuantity } = useCart();

    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
    console.log(totalQuantity);

    return (
        <NavLink to='/cart'>
        <div className={props.className}>
            <span className='NumerQuantity'>
                {totalItems}
            </span>
            <span><IconFont icon={faCartShopping} className='iconStyle header_button' /></span>
        </div>
        </NavLink>
    );
}

export default CartWidget;