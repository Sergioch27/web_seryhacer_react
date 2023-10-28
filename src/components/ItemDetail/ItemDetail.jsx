import ItemCount from "../ItemCount/ItemCount"
import React from "react"

const ItemDetail = ({products})=>{
    const BaseUrlImg = "https://api.espacioseryhacer.com/";
    return (
        <div>
    <div>
      <div>
        <img
          key={products['id']}
          src={BaseUrlImg + products['attributes']['img']['data'][0]['attributes']['formats']['medium']['url']}
          alt={products['attributes']['img']['data'][0]['attributes']['name']}
        />
      </div>
      <div>
        <h2>{products['attributes']['Title']}</h2>
        <span>$ {products['attributes']['price']}</span>
        {
            <ItemCount />
        }
      </div>
      <div>
        <p>{products['attributes']['Description']}</p>
      </div>
    </div>

        </div>
    )
}

export default ItemDetail