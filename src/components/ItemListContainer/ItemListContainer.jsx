import React from "react";

const ItemListContainer = (props) => {
    return (
        <ul>
            <li>
                <h2>
                    {props.product}
                </h2>
            </li>
        </ul>
    )
}
export default ItemListContainer