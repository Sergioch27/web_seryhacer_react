import React from "react";

const CategoryItem = (props) => {
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
export default CategoryItem