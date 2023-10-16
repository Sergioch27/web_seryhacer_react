import React from "react";

const ItemListContainer = (props) => {
    return (
        <ul>
            <li>
                <button>
                    {props.category}
                </button>
            </li>
        </ul>
    )
}
export default ItemListContainer