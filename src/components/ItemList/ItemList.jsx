import './ItemList.css'
import React from "react"
import Item from "../Item/Item"

const ItemList = ({ products }) => {
    return (
        <div className="products-list-container" onClick={() => console.log('click en itemlist')}>
            {
                products.map(prod => {
                    return (
                        <Item key={prod.id} {...prod}/>
                    )
                })
            }
        </div>
    )
}

export default ItemList
