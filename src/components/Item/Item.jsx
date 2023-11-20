import React from "react"
import { Link } from "react-router-dom"

const Item = ({ id, title, images, price }) => {

    const handleClick = (e) => {
        e.stopPropagation()
        console.log('click en item')
    }

    return (
        <div key={id} className="boxItem"  onClick={handleClick}>
        <div >
            {images.length > 0 && (
                <img
                    key={id}
                    src={images}
                    alt={title} />
            )}
        </div>
        <div >
        <h2>{title}</h2>
        ${price}
        </div>
        <Link to={`/box/${id}`}>Ver detalle</Link>
    </div>
    )
}

export default Item