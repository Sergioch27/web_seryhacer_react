import React from 'react'
import IconFont from '../IconFont/IconFont'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import './CartWidget.css'

const CartWidget = (props) => {
    return (
        <div className={props.className}>
        <span className='NumerQuantity'>
            {props.quantityNum}
        </span>
        <span><IconFont icon={faCartShopping} className='iconStyle header_button' /></span>
        </div>
    )
}
export default CartWidget