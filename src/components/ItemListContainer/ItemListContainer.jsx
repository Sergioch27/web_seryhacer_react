import React from "react";

const ItemListContainer = (props) => {
    return (
        <ul>
            <li>
                <button>
                    {props.product}
                </button>
            </li>
        </ul>
    )
}
export default ItemListContainer