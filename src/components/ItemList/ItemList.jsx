import React from "react";
import { Link } from "react-router-dom";
import './ItemList.css'
const ItemList = ({ products, className}) =>{
    const BaseUrlImg = "https://api.espacioseryhacer.com/";

    return (
        <div className={className} >
          {products.map((prod) => {
            const  prodImg = prod['attributes']['img']['data'];
            // console.log(prod);
            return (
                <><div key={prod['id']} className="boxItem">
                    <div >
                        {JSON.stringify(prodImg).length > 0 && (
                            <img
                                key={prod['attributes']['img']['data'][0]['id']}
                                src={BaseUrlImg + prod['attributes']['img']['data'][0]['attributes']['formats']['small']['url']}
                                alt={prod['attributes']['img']['data'][0]['attributes']['name']} />
                        )}
                    </div>
                    <div >
                    <h2>{prod['attributes']['Title']}</h2>
                    ${prod['attributes']['price']}
                    </div>
                    <Link to={`/box/${prod.id}`}>Ver detalle</Link>
                </div>
                </>
            )
        })}
        </div>
        );
}
export default ItemList
